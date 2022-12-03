import React from 'react'
import WeatherCard from './WeatherCard'
export default function Forecast({addForecast}){

  return (
     <div className="weather-temp">
      {addForecast.map(({key, dt, main, weather}) => (
        <WeatherCard
        key ={key}
        temp= {Math.trunc(main.temp)}
        dt= {dt * 1000}
        main = {weather[0].main}
        icon={weather[0].icon}
        />
      ))}
     </div>
  )
}
