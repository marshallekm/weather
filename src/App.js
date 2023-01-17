import SearchBar from './components/SearchBar.js'
import Forecast from './components/Forecast.js'
import React, {useEffect, useState} from 'react'
import AirQuality from './components/AirQuality.js';
import Current from './components/Current.js';
import Greetings from './components/Greetings.js'
// import Frontpage from './components/Frontpage.js'
import './App.css';
import './index.css';

function App() {
const API_KEY = process.env.REACT_APP_API_KEY;
const [cities, setCities] = useState([]);
const [lat, setLat] = useState();
const [lon, setLong] = useState();
const [forecast, setForecast] = useState();
const [place, setPlace] = useState("");
const [air, setAir] = useState([]);
const [current, setCurrent] = useState();
const [currentIcon, setCurrentIcon] =useState("");
const [currentWeather, setCurrentWeather] = useState("");

const addCity = (search) => {
 setCities(search)
};

useEffect(()=> {
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cities.city}&limit=${4}&appid=${API_KEY}&units=metric` {
      referrerPolicy: "unsafe_url"
  })
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
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`{
      referrerPolicy: "unsafe_url"
  })
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
  fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`{
      referrerPolicy: "unsafe_url"
  })
  .then((res) => res.json())
  .then((json) => {
   console.log(json.list)
   setAir(json.list)
  }).catch(e => {
    console.log(e)
  })
},[lat, lon, API_KEY])


useEffect(()=> {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`{
      referrerPolicy: "unsafe_url"
  })
  .then((res)=> res.json())
  .then((data) => {
   setCurrent(data.main.temp)
   const newIcon = data.weather[0].icon;
   setCurrentIcon(newIcon)
   const newWeather = data.weather[0].description
   setCurrentWeather(newWeather)
}).catch( e => {
  console.log(e)
})
},[lat, lon, API_KEY])



  return (
    <div className="App">
      <div className = "searchBar"><SearchBar addCity ={addCity} addPlace ={place}/></div>
      {/* <div className="home">{forecast ? "" : <Frontpage />}</div> */}
      <div className= "top">
        {forecast && <Greetings addPlace={place}/>}
        {current && <Current addCurrent={current} addCurrentIcon = {currentIcon} addCurrentWeather ={currentWeather}/>}
        {air && <AirQuality addAir={air}/>}
      </div>
      {forecast && <Forecast addForecast={forecast}/>}
    </div>
  );
}

export default App;
