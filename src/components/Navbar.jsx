import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre l'état de connexion de l'utilisateur
  const history = useHistory(); // Utilitaire de l'historique de navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Mettre à jour l'état de connexion lorsque l'état d'authentification change
    });

    return () => unsubscribe(); // Désabonnement lors de la suppression du composant
  }, []);

  const handleRegistration = () => {
    history.push('/login'); // Rediriger l'utilisateur vers la page de connexion lorsqu'il clique sur "Connexion"
  };

  const handleRegister = () => {
    history.push('/register'); // Rediriger l'utilisateur vers la page d'inscription lorsqu'il clique sur "S'enregistrer"
  };

  const logOut = async () => {
    try {
      await signOut(auth); // Déconnexion de l'utilisateur à l'aide de l'API d'authentification Firebase
      history.push('/'); // Rediriger l'utilisateur vers la page d'accueil après la déconnexion
    } catch {
      alert("Pour quelque raison vous ne pouvez pas vous déconnecter, s'il vous plaît vérifier votre connexion internet et réessayer");
    }
  };

  return (
    <div className='font-bold flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#a0f3d9]'>M2L.</h1>
      <div className='text-white'>
        <ul className='hidden md:flex'>
          <li className='p-4'>Accueil</li>
          <li className='p-4'>Formation</li>
          {!isLoggedIn && (
            <>
              <li>
                <button className='p-4' onClick={handleRegistration}>
                  Connexion
                </button>
              </li>
              <li>
                <button className='p-4 bg-[#a0f3d9] rounded-md' onClick={handleRegister}>
                  S'enregistrer
                </button>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <button className='p-4 ml-1 bg-[#000000] rounded-md' onClick={logOut}>
                  Déconnexion
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
