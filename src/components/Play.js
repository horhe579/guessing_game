//import logo from './logo.svg';
//import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import Guess from "./Guess";

function guessColor(selectedDogs) {
  const colors = [
    '#C94E56',
    '#C43B44',
    '#B0353D',
    '#9C2F36',
    '#89292F',
  ];

  const maxGuesses = colors.length * 2 - 2;

  if (selectedDogs.length >= maxGuesses) {
    return String(colors[colors.length-1])  
  }

  const step = Math.min(Math.floor(selectedDogs.length / 2), maxGuesses);
  const startIndex = step;

  return  String(colors[startIndex]) 
  {/*she i eba putkata maina na taq funkciq prokleta*/}

}


const Play = ({ selectedDogs, randomDog, showHint }) => {  
  return (
    <div class>
      <div className="flex justify-center mx-auto w-full">
        {/* First display */}
        <div
          className={`min-w-[73px] max-w-[10%] justify-center items-center ml-40 mr-0.5 font-souls min-h-[33px] max-h-[33px]`}
          style={{
            'background-color': guessColor(selectedDogs),
            border: '2px solid #2a3352',
            borderBottomLeftRadius: '50% 50%',
            borderBottomRightRadius: '50% 50%',
            width: '6%',
            height: '5%',
            fontSize: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)',
          }}
        >
          {selectedDogs && randomDog && (
            <div
              className="text-[#181d2e]"
              style={{
                borderBottomLeftRadius: '50% 50%',
                borderBottomRightRadius: '50% 50%',
              }}
            >
              {console.log(randomDog)}
              <b>Tries: {selectedDogs.length}</b>
            </div>
          )}
        </div>

        {/* Second display */}
        <div
          className="min-w-[73px] overflow-auto no-scrollbar max-w-[10%] flex justify-center items-center mr-40 ml-0.5 font-souls min-h-[33px] max-h-[33px] bg-[#4DAA57]"
          style={{
            border: '2px solid #2a3352',
            borderBottomLeftRadius: '50% 50%',
            borderBottomRightRadius: '50% 50%',
            width: '6%',
            height: '5%',
            fontSize: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)',
          }}
        >
          {selectedDogs && randomDog && (
            <div
              className="p-1 text-[#181d2e] text-xs rounded-b-xl"
            >
              {showHint || (
                <b
                  style={{
                    opacity: 1, // Always visible
                    transition: "opacity 1s", // Add a CSS transition for opacity
                  }}
                >
                  {`Hint in ${8 - selectedDogs.length}`}
                </b>
              )}

              <b
                style={{
                  opacity: showHint ? 1 : 0, // Set opacity based on showHint
                  transition: "opacity 1s", // Add a CSS transition for opacity
                }}
              >
                {showHint ? randomDog.origin : ""}
              </b>
            </div>
          )}
        </div>
      </div>

          <div className='font-souls font-bold text-3xl p-3 flex mx-auto w-2/5'>
            <div className='pl-24 w-1/2'
            style={{
              opacity: selectedDogs.length > 0 ? 1 : 0,
              transition: 'opacity 3s',
            }}>
              <span className={'text-[#181d2e]'}>breed</span>
            </div>

            <div className='pr-2 w-1/2' style={{
              opacity: selectedDogs.length > 0 ? 1 : 0,
              transition: 'opacity 3s',
            }}>
              <span className={`text-[#181d2e]`}>origin</span>
            </div>
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