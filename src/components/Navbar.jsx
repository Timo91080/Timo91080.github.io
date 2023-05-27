import React, {useState} from 'react'

import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const history = useHistory();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleRegister = () => {
    // Rediriger vers la page de connexion
    history.push('/login');
   
  };
  
  const handleRegistration = () => {
    // Rediriger vers la page de connexion
    history.push('/register');
   
  };
  return (
    <div className='font-bold flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#a0f3d9]'>M2L.</h1>
      <div className='text-white'>
        <ul className='hidden md:flex'>
          <li className='p-4'>Accueil</li>
          <li className='p-4'>Formation</li>
          <li> <button className='p-4' onClick={handleRegister} >Connexion </button> </li>
          <li> <button className='p-4 bg-[#a0f3d9] rounded-md' onClick={handleRegistration}>
 S'enregistrer
          </button></li>
          <li> <button className='p-4 ml-1 bg-[#000000] rounded-md'>
 Deconnexion
          </button></li>
        
       
        </ul>
        </div>
        
        </div>
    
  )
}

export default Navbar
