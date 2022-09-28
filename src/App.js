import SearchBar from './components/SearchBar.js'
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
const API_KEY = process.env.REACT_APP_API_KEY;
const [cities, setCities] = useState([]);
const [lon, setLong] = useState([]);
const [lat, setLat] = useState([]);
const [forecast, setForecast ] = useState([]);

const addCity = (search) => {
 setCities(search)
};

console.log(cities)

useEffect(()=> {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cities.city}&limit=${4}&appid=${API_KEY}&units=metric`)
  .then((res) => res.json())
   .then((cityData) => {
    setLong(cityData[0].lon);
    setLat(cityData[0].lat);
   }).catch(e => {
    console.log(e)
   });
}, [API_KEY, cities.city])


useEffect(()=> {
   fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then((res) => res.json())
  .then((res) => {
   setForecast(res.list)
  }).catch(e => {
    console.log(e)
  });
},[lat, lon, cities.city, API_KEY]);

console.log(forecast)

  return (
    <div className="App">
      <SearchBar addCity ={addCity}/>
    </div>
  );
}

export default App;
