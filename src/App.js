//import logo from './logo.svg';
import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import Play from './components/Play';
import { useState } from 'react';
import DogInfo from './components/DogInfo';
import SearchBar from './components/SearchBar';

function App() {

  const [selectedDogs, setSelectedDogs] = useState([]) //a usestate that holds a collection of the guessed dogs
  const [randomDog, setRandomDog] = useState(null)

  const handleDogSelect = (dog) => {
    // checks if the dog the user clicks has already been selected
    if(selectedDogs === null || !selectedDogs.some((selectedDog) => selectedDog.breed === dog.breed))
    {
      setSelectedDogs((prevSelectedDogs) => [...prevSelectedDogs, dog]);
      //setSelectedDogs([dog])
      //console.log(selectedDogs.length)
    }
    //setIsOpen(false)

  }

  const setRandomSelectedDog = (dog) => {
    setRandomDog(dog);
  };  

  return (
    <div ClassName="App">
      <SearchBar
        selectedDogs={selectedDogs}
        onDogSelect={handleDogSelect}
        randomDog={randomDog}
        setRandomSelectedDog={setRandomSelectedDog}
      />
      <Play
        selectedDogs={selectedDogs}
        randomDog={randomDog}
      />
    </div>
  )
}

export default App;