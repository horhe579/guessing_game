import React from 'react';
import '../index.css'
//import axios from 'axios';

function Guess({ breed, origin, imageLink, randomDog }) {
    const isCorrectBreed = breed.toLowerCase() === randomDog.breed.toLowerCase();
    const isCorrectOrigin = randomDog.origin.toLowerCase().includes(origin.toLowerCase());
  
    const breedTextClass = isCorrectBreed ? 'text-green-500' : 'text-red-500';
    const originTextClass = isCorrectOrigin ? 'text-green-500' : 'text-red-500';
  
    return (
      <div className='p-3 flex items-center justify-center cursor-pointer'>
        <div className="border-2 border-[#865f5f]/80 rounded-full overflow-hidden h-20 w-20">
          <img
            src={imageLink}
            alt={breed}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
  
        <div className='h-50 border-2 font-souls w-2/12 text-2xl font-semibold'>
          <span className={`${breedTextClass}`}>{breed}</span> 
        </div>

        <div className='border-2 font-souls w-2/12 text-2xl font-semibold'>
          <span className={`${originTextClass}`}>{origin}</span>
        </div>
      </div>
    );
  }
  


export default Guess