//import logo from './logo.svg';
//import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import SearchBar from "./SearchBar";

const Play = ({ selectedDogs, randomDog }) => {
  return (
    <div>
      <div className="font-souls">
        {selectedDogs && randomDog && (
          <div>
            <b>Tries: {selectedDogs.length}</b>
            <b> Random Dog: {randomDog.breed}</b>
          </div>
        )}
      </div>
      {selectedDogs && (
        selectedDogs.slice().reverse().map((dog) => (
          <div key={dog.index} style={{ color: dog.breed.toLowerCase() === (randomDog?.breed?.toLowerCase()) ? 'green' : 'red' }}>
            <i>{dog.breed}</i>
          </div>
        ))
      )}
    </div>
  );
};


export default Play;