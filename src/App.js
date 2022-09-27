import SearchBar from './components/SearchBar.js'
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
const API_KEY = process.env.REACT_APP_API_KEY;
const [cities, setCities] = useState([]);
const [lon, setLong] = useState([]);
const [lat, setLat] = useState([]);

const addCity = (search) => {
 setCities(search)
};

console.log(cities)


useEffect(()=> {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cities.city}&limit=${4}&appid=${API_KEY}`)
  .then((res) => res.json())
   .then((cityData) => {
    setLong(cityData[0].lon);
     setLat(cityData[0].lat);
   });
})

console.log(lon)
console.log(lat)

useEffect(()=> {
   fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
   .then((res) => res.json())
   .then((data) => {
    console.log(data);
   });
},);

console.log(cities)

  return (
    <div className="App">
      <SearchBar addCity ={addCity}/>
    </div>
  );
}

export default App;
