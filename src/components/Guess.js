import React from 'react';
import '../index.css'
//import axios from 'axios';

function checkOriginMatch(guessedOrigin, randomDogOrigin) {
  const guessedOriginLower = guessedOrigin.toLowerCase();
  const randomOriginLower = randomDogOrigin.toLowerCase();

  if (randomOriginLower === guessedOriginLower) {
    return '#4DAA57'; // Exact match, background color green
  } else if (guessedOriginLower.includes(randomOriginLower)) {
    return '#D1D646'; // Partial match, background color yellow
  } else {
    return '#B0353D'; // No match, background color red
  }
}

function checkBreedMatch(guessedBreed, randomDogBreed) {
  const guessedBreedLower = guessedBreed.toLowerCase();
  const randomBreedLower = randomDogBreed.toLowerCase();
  if (randomBreedLower === guessedBreedLower) {
    return '#4DAA57'; // Exact match, background color green
  } else {
    return '#B0353D'; // No match, background color red
  }
}

function Guess({ breed, origin, imageLink, randomDog }) {
  const breedBackgroundcolor = checkBreedMatch(breed, randomDog.breed)
  const originBackgroundColor = checkOriginMatch(origin, randomDog.origin);

  return (
    <div className='relative p-2.5 flex mx-auto w-2/5'>
      <div className={`absolute border-4 border-[#2a3352] rounded-full overflow-hidden h-20 w-20`}>
        <img
          src={imageLink}
          alt={breed}
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      <div
        className={`pl-20 pr-8 flex justify-center items-center min-h-[20%] h-20 border-2 border-[#2a3352] font-souls w-full font-semibold text-2xl rounded-full text-center`}
        style={{
          backgroundImage: `linear-gradient(90deg, ${breedBackgroundcolor} 40%, ${originBackgroundColor} 60%)`,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)',
        }}>
        <div className='w-1/2'>
        {/* <div className={`flex justify-center items-center min-h-[20%] border-2 font-souls w-2/12 text-2xl font-semibold h-20 rounded-l-[33px] ${isCorrectBreed ? 'bg-green-500' : 'bg-red-500'}`}> */}
          <span className={`text-[#181d2e]`}>{breed}</span>
        </div>

        <div className='w-1/2'>
        {/* <div className={`flex justify-center items-center min-h-[20%] border-2 font-souls w-2/12 text-2xl font-semibold h-20 rounded-r-[33px] ${originBackgroundColor}`}> */}
          <span className={`text-[#181d2e]`}>{origin}</span>
        </div>  
      </div>
      
    </div>
  );
}





export default Guess