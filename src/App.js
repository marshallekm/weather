import SearchBar from './components/SearchBar.js'
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const API_KEY = process.env.REACT_APP_API_KEY;

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position){
  setLat(position.coords.latitude);
  setLong(position.coords.longitude);
  });
  console.log(lat)
  console.log(long)
}, [lat, long]);

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((weatherData) => console.log(weatherData));

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
