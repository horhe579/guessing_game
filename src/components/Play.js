//import logo from './logo.svg';
//import './App.css';
//import PersonList from './components/PersonList.js';
//import DogList from './components/DogList';
import SearchBar from "./SearchBar";

const Play = ()=> {

    const parentHandleSearch = (event) => {
      console.log(event.target.value)
    }

    return (
    <div ClassName="Play">
      <SearchBar handleSearch={parentHandleSearch} />
    </div>
  )
}

export default Play;