//import logo from './logo.svg';
//import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import { isEqual } from 'lodash';
import Guess from "./Guess";

const Play = ({ selectedDogs, randomDog, guessColor }) => {
  return (
    <div>
      <div className={`m-auto font-souls border-2 bg-[${guessColor}] border-[#2a3352] rounded-b-full w-[10%] text-xl`}>
        {selectedDogs && randomDog && (
          <div>
            {console.log(isEqual(selectedDogs.length, 0))}
            <b>Tries: {selectedDogs.length}</b>
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