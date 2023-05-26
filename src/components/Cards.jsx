import React from 'react';

import Forma from '../assets/formation.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <h1 className='max-w-[840px] mx-auto justify-center text-center mb-40 py-4 font-bold text-4xl'>Les Formations en Tendances

        </h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Forma} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Formation de .....</h2>
              <p className='text-center text-4xl font-bold'>€prix</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'> Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ullam impedit molestiae non pariatur voluptates quam suscipit esse maiores, deserunt, dolorum nostrum voluptatem quaerat reprehenderit sed! Reiciendis modi repellat voluptate?</p>
                 
              </div>
              <button className='bg-[#a0f3d9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Acceder a la formation</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Forma} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Formation de....</h2>
              <p className='text-center text-4xl font-bold'>Prix€</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere optio temporibus error, odit dolor, adipisci sit voluptatibus dicta unde officia, ex laborum. Cupiditate optio rem iste autem neque? Similique.</p>
                  
              </div>
              <button className='bg-black text-[#a0f3d9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Acceder a la formation</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Forma} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Formation de .....</h2>
              <p className='text-center text-4xl font-bold'>prix€</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ut inventore, modi praesentium quis illum aliquam hic tenetur assumenda labore saepe voluptas tempora ea reiciendis facilis? Expedita corrupti aliquid perspiciatis.</p>
             
              </div>
              <button className='bg-[#a0f3d9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Acceder a la formation</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
