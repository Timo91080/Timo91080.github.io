import React from 'react'

import M2 from '../assets/mdl.png'
const Nhl = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
           <img className='w-[400px] mx-auto "w-64 'src={M2} alt='/' sizes={30}></img>
         <div className='flex flex-col justify-center'>
        <p className='text-[#a0f3d9] font-bold'>Maison des ligues</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Contexte:</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, tempora cumque. Veniam inventore laborum excepturi vero fugit et recusandae. Ab sed 
            dolorem nulla nesciunt exercitationem voluptas accusantium sapiente minima excepturi!</p>
       <button className='text-[#a0f3d9] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black'>Accéder aux Formations</button>

       </div>
       </div>
    </div>
  )
}

export default Nhl
