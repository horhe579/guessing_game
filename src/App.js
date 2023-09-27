//import logo from './logo.svg';
import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import Play from './components/Play';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CongratsModal from './components/CongratsModal';

function App() {

  const [selectedDogs, setSelectedDogs] = useState([]) //a usestate that holds a collection of the guessed dogs
  const [randomDog, setRandomDog] = useState(null)
  const [isCorrectGuess, setIsCorrectGuess] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDogSelect = (dog) => {
    // checks if the dog the user clicks has already been selected
    if(selectedDogs === null || !selectedDogs.some((selectedDog) => selectedDog.breed === dog.breed))
    {
      setSelectedDogs((prevSelectedDogs) => [...prevSelectedDogs, dog]);
      //setSelectedDogs([dog])
      //console.log(selectedDogs.length)
      handleGuess(dog)
    }
    //setIsOpen(false)

  }

  const setRandomSelectedDog = (dog) => {
    setRandomDog(dog);
  };  

  const handleGuess = (dog) => {
    if(selectedDogs)
    {
      if(dog === randomDog)
      {
        setIsCorrectGuess(true)
        setIsModalOpen(true)
      }
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleNewGame = () => {
    window.location.reload();
  }

  return (
    <div ClassName="App">
      {isCorrectGuess ? (
        <button onClick={handleNewGame}>Start New Game</button>
      ) : null}
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
      <CongratsModal 
      isOpen={isModalOpen} 
      onClose={handleCloseModal}
      handleNewGame={handleNewGame}
      />

    </div>
  )
}

export default App;