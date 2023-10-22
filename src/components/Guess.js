import React from 'react';
import '../index.css'
//import axios from 'axios';

function checkOriginMatch(guessedOrigin, randomDogOrigin) {
  const guessedOriginLower = guessedOrigin.toLowerCase();
  const randomOriginLower = randomDogOrigin.toLowerCase();

  if (randomOriginLower === guessedOriginLower) {
    return 'green'; // Exact match, background color green
  } else if (guessedOriginLower.includes(randomOriginLower)) {
    return 'yellow'; // Partial match, background color yellow
  } else {
    return 'red'; // No match, background color red
  }
}

function checkBreedMatch(guessedBreed, randomDogBreed) {
  const guessedBreedLower = guessedBreed.toLowerCase();
  const randomBreedLower = randomDogBreed.toLowerCase();
  if (randomBreedLower === guessedBreedLower) {
    return 'green'; // Exact match, background color green
  } else {
    return 'red'; // No match, background color red
  }
}

function Guess({ breed, origin, imageLink, randomDog }) {
  const breedBackgroundcolor = checkBreedMatch(breed, randomDog.breed)
  const originBackgroundColor = checkOriginMatch(origin, randomDog.origin);

  return (
    <div className='p-3 flex items-center justify-center'>
      <div className={`border-2 border-[#865f5f]/80 rounded-full overflow-hidden h-20 w-20`}>
        <img
          src={imageLink}
          alt={breed}
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      <div className={`flex justify-center items-center min-h-[20%] h-20 border-2 font-souls w-3/4 font-semibold text-2xl rounded-xl text-center`}
      style={{backgroundImage: `linear-gradient(90deg, ${breedBackgroundcolor} 40%, ${originBackgroundColor} 60%)`}}>
        <div className='w-1/2'>
        {/* <div className={`flex justify-center items-center min-h-[20%] border-2 font-souls w-2/12 text-2xl font-semibold h-20 rounded-l-[33px] ${isCorrectBreed ? 'bg-green-500' : 'bg-red-500'}`}> */}
          <span className={`text-black`}>{breed}</span>
        </div>

        <div className='w-1/2'>
        {/* <div className={`flex justify-center items-center min-h-[20%] border-2 font-souls w-2/12 text-2xl font-semibold h-20 rounded-r-[33px] ${originBackgroundColor}`}> */}
          <span className={`text-black`}>{origin}</span>
        </div>  
      </div>
      
    </div>
  );
}





export default Guess