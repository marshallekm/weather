import SearchBar from './components/SearchBar.js'
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
// const [lat, setLat] = useState();
// const [long, setLong] = useState();
const API_KEY = process.env.REACT_APP_API_KEY;
const [cities, setCities] = useState([]);

const addCity = (search) => {
 setCities([...cities], search)
};

console.log(cities)

  return (
    <div className="App">
      <SearchBar addCity ={addCity}/>
    </div>
  );
}

export default App;
