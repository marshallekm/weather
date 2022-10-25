import React from 'react'

export default function WeatherCard({key, dt, icon, main, temp}){
 const date = new Date(dt);
return(
  <div className= "weather-everything">
  <div className="weather-body">
  <div className="weather-group">
    <div className="weather-card" >
      <div className ="weather-date">
       {date.toLocaleDateString()} - {date.toLocaleTimeString()}
     </div>
      <div className="weather-icon">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
      </div>
     <div className= "weather-temp">
      {temp}°C
     </div>
     <div className ="weather-main">
      {main}
     </div>
    </div>
  </div>
  </div>
  </div>
  )
}
