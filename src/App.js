//import logo from './logo.svg';
import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import { isEqual } from 'lodash';
import Play from './components/Play';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CongratsModal from './components/CongratsModal';
import { triggerConfetti } from './confetti'
import './index.css'

function App() {

  const [showHint, setShowHint] = useState(false);
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

    if(selectedDogs.length >= 7) {
      setShowHint(true)
    }
    //setIsOpen(false)

  }

  const setRandomSelectedDog = (dog) => {
    setRandomDog(dog);
  };  

  const handleGuess = (dog) => {
    if(selectedDogs)
    {
      if (isEqual(dog, randomDog)) {
        setIsCorrectGuess(true)
        setIsModalOpen(true)
        triggerConfetti()
      }

    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleNewGame = () => {
    window.location.reload();
  }

  //fix this

  return (
    <div className="App bg-[#fff2f2] min-h-screen">
      <div className='logo flex justify-center'>
        <img src={'https://scontent.xx.fbcdn.net/v/t1.15752-9/380320485_853442783067970_2388739403758307620_n.png?stp=dst-png_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CPIR1HBct38AX-mY6Uq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTENHxdv6wXBz7sxU8YwVb6KIHnT98d-uEMNee0RcI-Cg&oe=654C005B'} 
        className=" w-1/6 h-1/6 overflow-hidden transform scale-[1.7] hover:scale-[2.0] transition duration-500" />
      </div>
      <SearchBar
        selectedDogs={selectedDogs}
        onDogSelect={handleDogSelect}
        randomDog={randomDog}
        setRandomSelectedDog={setRandomSelectedDog}
        isCorrectGuess={isCorrectGuess}
      />

      <Play
        selectedDogs={selectedDogs}
        randomDog={randomDog}
        handleNewGame={handleNewGame}
        isCorrectGuess={isCorrectGuess}
        showHint={showHint}
      />
      
      {/*might make this new game button work in the future in a better way, sits ugly as of right now and has no real purpose because of the modal*/}
      {/* {isCorrectGuess ? (
        <button className='my-10 p-8 border-2 border-[#2a3352] text-2xl text-[#181d2e] font-bold font-souls w-1/8 h-1/3'
        style={{ backgroundColor: '#45974D',  borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%', borderTopLeftRadius: '10% 30%', borderTopRightRadius: '10% 30%' }}
         onClick={handleNewGame}>
          New Game
          </button>
      ) : null} */}

      <CongratsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        handleNewGame={handleNewGame}
      />

    </div>
  )
}

export default App;