import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import DogInfo from './DogInfo';
import '../fonts/font.css';


//ne se pravi komponent s klas a s funkciq
const SearchBar = ({selectedDogs, onDogSelect, randomDog, setRandomSelectedDog})=> {

  //use effect da se izbira random kuche na vseki page refresh
    const [dogs, setDogs] = useState([])
    const [inputValue, setInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const handleDogSelect = (dog) => {
      onDogSelect(dog); // Call the function passed from the parent to add the selected dog
      // Other logic for handling the selection
    };

    const handleRandomDogSelect = (dog) => {
      setRandomSelectedDog(dog); // Set the randomDog state
      // Other logic for handling the selection
    };
    
    useEffect(() => {
      const headers = {
        'X-RapidAPI-Key' : '03666fe77emsh9f4877cf00a55fcp12ea9ajsnae5bf8074f96',
        'X-RapidAPI-Host' : 'dog-breeds2.p.rapidapi.com'
      }

      axios.get(`https://dog-breeds2.p.rapidapi.com/dog_breeds`, { headers })
        .then(res => {
          //error handling
          setDogs(res.data)
        })
      
    }, [])

    

    useEffect(() => {
      if (dogs.length && !randomDog) {
        const randomIndex = Math.floor(Math.random() * (dogs.length - 1));
        const selectedRandomDog = dogs[randomIndex];
        handleRandomDogSelect(selectedRandomDog);
      } 
    }, [dogs, randomDog]) 



    //console.log(dogs)



    const handleFocus = (event) => {
      setIsOpen(true)
    }

    const handleChange = (event) => {
      //debugger
      setInput(event.target.value)
      //console.log(event.target.value)
      //console.log(inputValue)
      //console.log(isOpen)
    }

    const handleBlur = () => {
      setTimeout(() => {
        setIsOpen(false)
      }, 200)
    }
  
    
      return (
        //input field used for typing the dog breed
        <div className='relative flex flex-col items-center' onBlur={handleBlur}>
          <input
            placeholder='Enter a dog breed'
            type = 'text'
            value={inputValue || ''}
            onClick={handleFocus}
            onChange={handleChange}
            className='bg-[#fff7f7] font-souls shadow-2xl border-[#1e243b] pt-2 border-4	px-4 mx-auto w-[28%] h-20 text-4xl rounded-full'
            style={{ borderColor: '#1e243b', '--tw-ring-color':  '#1e243b', '--tw-ring-shadow': 'null'}}
          />

          {isOpen && inputValue !== '' && inputValue !== null && (
            dogs.some((dog) => dog.breed.toLowerCase().includes(inputValue.toLowerCase())) && (
              <div id="dropdownDogs" className='top-20 absolute rounded-lg shadow-2xl w-[23%] bg-[#cfc4c4] max-h-96 overflow-y-auto'>
                <ul className='py-2 overflow-hidden text-grey-700'>
                  {dogs
                    .filter((dog) =>
                      inputValue !== '' &&
                      dog.breed.toLowerCase().includes(inputValue.toLowerCase()) &&
                      !selectedDogs.some((selectedDog) => selectedDog.breed === dog.breed)
                    )
                    .map((dog) => (
                      <li
                        key={dog.breed}
                        onClick={() => handleDogSelect(dog)}
                        className='cursor-pointe hover:bg-[#c6aeae]/60'
                      >
                        <DogInfo
                          breed={dog.breed}
                          origin={dog.origin}
                          imageLink={dog.img}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          )}

        </div>
      )
    }

    export default SearchBar