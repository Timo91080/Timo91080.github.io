import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const AdminFormations = () => {
  const [formations, setFormations] = useState([]);
  const [newFormation, setNewFormation] = useState({
    duration: '',
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'formations'));
        const formationsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFormations(formationsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations :', error);
      }
    };

    fetchFormations();
  }, []);

  const handleInputChange = (e) => {
    setNewFormation({ ...newFormation, [e.target.name]: e.target.value });
  };

  const handleCreateFormation = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'formations'), {
        duration: newFormation.duration,
        title: newFormation.title,
        description: newFormation.description,
      });
      console.log('Nouvelle formation ajoutée avec l\'ID :', docRef.id);

      setNewFormation({
        duration: '',
        title: '',
        description: '',
      });

      alert('Nouvelle formation créée avec succès !');
    } catch (error) {
      console.error('Erreur lors de la création de la formation :', error);
    }
  };

  const handleUpdateFormation = async (id, updatedFormation) => {
    try {
      await updateDoc(collection(db, 'formations', id), updatedFormation);
      console.log('Formation mise à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la formation :', error);
    }
  };

  const handleDeleteFormation = async (id) => {
    try {
      await deleteDoc(collection(db, 'formations', id));
      console.log('Formation supprimée avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de la formation :', error);
    }
  };

  return (
    <div className="admin-formations">
      <h2>Créer une nouvelle formation</h2>
      <form onSubmit={handleCreateFormation}>
        <div>
          <label htmlFor="duration">Durée :</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={newFormation.duration}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newFormation.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            value={newFormation.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Créer</button>
      </form>

      <h2>Formations existantes</h2>
      {formations.map((formation) => (
        <div key={
