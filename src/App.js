import SearchBar from './components/SearchBar.js'
import Forecast from './components/Forecast.js'
import WeatherCard from './components/WeatherCard.js'
import './App.css';
import './index.css';
import React, {useEffect, useState} from 'react'
import AirQuality from './components/AirQuality.js';
import AirQualityCard from './components/AirQualityCard.js';

function App() {
const API_KEY = process.env.REACT_APP_API_KEY;
const [cities, setCities] = useState([]);
const [lat, setLat] = useState();
const [lon, setLong] = useState();
const [forecast, setForecast] = useState();
const [place, setPlace] = useState();
const [air, setAir] =useState([]);

const addCity = (search) => {
 setCities(search)
};

useEffect(()=> {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cities.city}&limit=${4}&appid=${API_KEY}&units=metric`)
  .then((res) => res.json())
  .then((cityData) => {
    setLat(cityData[0].lat);
    setLong(cityData[0].lon);
   })
   .catch(e => {
    console.log(e)
   })
},)


useEffect(()=> {
   fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
  .then((res) => res.json())
  .then((json) => {
    const forecastListName = `${json.city.name}, ${json.city.country}`
    setPlace(forecastListName)
    // const forecastList1 = json.list.weather;
    console.log(json.list)
    setForecast(json.list)
  }).catch(e => {
    console.log(e)
  });
},[lat, lon, API_KEY]);

useEffect(()=> {
  fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
  .then((res) => res.json())
  .then((json) => {
   console.log(json.list)
   setAir(json.list)
  }).catch(e => {
    console.log(e)
  })
},[lat, lon, API_KEY])

console.log(air)

  return (
    <div className="App">
      <SearchBar addCity ={addCity}/>
      {place}
      {air && <AirQuality addAir={air}/>}
      {air && <AirQualityCard />}
      {forecast && <Forecast addForecast={forecast}/>}
      {forecast && <WeatherCard/>}
    </div>
  );
}

export default App;
