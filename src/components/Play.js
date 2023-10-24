//import logo from './logo.svg';
//import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import { isEqual } from 'lodash';
import Guess from "./Guess";

function guessColor(selectedDogs) {
  const colors = [
    [201, 78, 86], // #C94E56
    [196, 59, 68], // #C43B44
    [176, 53, 61], // #B0353D
    [156, 47, 54], // #9C2F36
    [137, 41, 47], // #89292F (Limit color)
  ];

  const maxGuesses = colors.length * 2 - 2; // The number of available colors with a jump every 2 guesses

  if (selectedDogs.length >= maxGuesses) {
    // If we've reached the maximum number of guesses, return the limit color
    return `rgb(${colors[colors.length - 1].join(',')})`;
  }

  const step = Math.min(Math.floor(selectedDogs.length / 2), maxGuesses);
  const startIndex = step;

  const currentColor = colors[startIndex];

  return `rgb(${currentColor.join(',')})`;
}


const Play = ({ selectedDogs, randomDog }) => {
  return (
    <div>
      <div className="m-auto font-souls" 
      style={{ border: '2px solid #2a3352', borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%', width: '6%', height: '5%', fontSize: '1rem',
               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)'
              }}>
        {selectedDogs && randomDog && (
          <div className='text-[#181d2e]' style={{ backgroundColor: guessColor(selectedDogs),  borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}>
            {console.log(isEqual(selectedDogs.length, 0))}
            <b>Tries: {selectedDogs.length}</b>
            {console.log(randomDog.breed)}
            {/*<b> Random Dog: {randomDog.breed}</b>*/ }
          </div>
        )}
      </div>
      {selectedDogs && (
        selectedDogs.slice().reverse().map((dog) => (
          <div key={dog.index} style={{ color: dog.breed.toLowerCase() === (randomDog?.breed?.toLowerCase()) ? 'green' : 'red' }}>
            <Guess
              breed={dog.breed}
              origin={dog.origin} 
              imageLink={dog.img}
              randomDog={randomDog}          
            />
          </div>
        ))
      )}
    </div>
  );
};


export default Play;