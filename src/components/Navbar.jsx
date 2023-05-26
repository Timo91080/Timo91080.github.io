import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
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
        
       
        </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size= {20}/> :  <AiOutlineMenu size={20} />}
       
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#a0f3d9] m-4 '>M2L.</h1>

          <ul className='uppercase p-4 text-white'>
        <li className='p-4 border-b border-gray-600'>S'ebregistrer</li> 
        <li className='p-4 border-b border-gray-600'>Connexion</li>
        <li className='p-4 '>Formation</li>
      
       
          </ul>
        </div>
    </div>
  )
}

export default Navbar
