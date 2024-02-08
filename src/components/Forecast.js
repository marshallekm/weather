import React from 'react'
import WeatherCard from './WeatherCard'
import {AiFillCaretRight} from "react-icons/ai"
export default function Forecast({addForecast}){

  return (
    <div className="bottom">
    <div className="scroll-instruction">
      <h4>Scroll for forecast <AiFillCaretRight></AiFillCaretRight></h4>
    </div>
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
     </div>
  )
}
