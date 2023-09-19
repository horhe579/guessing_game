import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import DogInfo from './DogInfo';


//ne se pravi komponent s klas a s funkciq
const SearchBar = ()=> {

  //use effect da se izbira random kuche na vseki page refresh
    const [dogs, setDogs] = useState(null)
    const [inputValue, setInput] = useState(null)
    const [selectedDog, setSelectedDog] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [randomDog, setRandomDog] = useState(null)
    
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
      if (dogs && dogs.length > 0) {
        const randomIndex = Math.floor(Math.random() * (dogs.length - 1));
        const selectedRandomDog = dogs[randomIndex];
        setRandomDog(selectedRandomDog);
      } 
    }, [dogs]) 


    //console.log(dogs)
    console.log(randomDog)

    const handleDogSelect = (dog) => {
      setSelectedDog(dog)
      setIsOpen(false)
    }

    const handleFocus = (event) => {
      setIsOpen(true)
    }

    const handleChange = (event) => {
      // console.log(event.target.value)
      //debugger
      setInput(event.target.value)
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
        <div onBlur={handleBlur}>
          <input
            placeholder='Enter a dog breed'
            type = 'text'
            value={inputValue}
            onClick={handleFocus}
            onChange={handleChange}
          />

          {isOpen && inputValue!=='' && inputValue!==null &&(
            <div id="dropdownDogs" class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
              <ul className='py-2 overflow-y-auto text-grey-700'>
                  {
                    //dropdown menu
                    dogs
                      ?.filter( (dog) => inputValue!=='' && dog.breed.toLowerCase().includes(inputValue?.toLowerCase()))
                      .map(dog =>
                        (
                            <li key={dog.breed} onClick={() => handleDogSelect(dog)} className='cursor-pointe hover:bg-gray-100 dark:hover:bg-gray-600'>
                              <DogInfo
                                breed={dog.breed}
                                origin={dog.origin} 
                                imageLink={dog.img}
                              /> 
                            </li>
                        ) )
                  }
              </ul>
            </div>
          )}
          {console.log(selectedDog)}
        </div>
      )
    }

    export default SearchBar
  


     