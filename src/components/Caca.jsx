import React, { useState } from 'react';
import Forma from '../assets/formation.png';

const Caca = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter les données du formulaire, par exemple, les envoyer à un serveur
    console.log(formData);
  };

  return (
<div className='w-full py-[10rem] px-4 bg-white'> 

    <div className=' max-w-[1500px] ml- grid md:grid-cols-3 gap-8'>
  
    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Forma} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>Formation de....</h2>
        <p className='text-center text-4xl font-bold'>Prix€</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere optio temporibus error, odit dolor, adipisci sit voluptatibus dicta unde officia, ex laborum. Cupiditate optio rem iste autem neque? Similique.</p>
            
        </div>
        <button className='bg-black text-[#a0f3d9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>S'inscrire à la formation</button>
    </div>
   

      <div className='container relative left-25 max-w-md ml-60 px-20'>
        <h2 className='text-2xl font-bold mb-4'>Formulaire d'inscription</h2>
        <form onSubmit={handleSubmit} className='px-30'>
          <div className='mb-4'>
            <label htmlFor='firstName' className='block mb-2 text-sm font-medium text-gray-700'>
              Prénom:
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='lastName' className='block mb-2 text-sm font-medium text-gray-700'>
              Nom:
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='phoneNumber' className='block mb-2 text-sm font-medium text-gray-700'>
              Numéro de téléphone:
            </label>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='location' className='block mb-2 text-sm font-medium text-gray-700'>
              Lieu de résidence:
            </label>
            <input
              type='text'
              id='location'
              name='location'
              value={formData.location}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>

          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Caca;
