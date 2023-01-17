import React from 'react'

export default function WeatherCard({dt, icon, main, temp}){
 const date = new Date(dt);

return(
  <div className="weathers">
    <div className="weather-card" >
      <div className ="weather-date">
       {date.toLocaleDateString()}  {new Intl.DateTimeFormat("en-US", {timeStyle: 'short'}).format(date)}
     </div>
      <div className="weather-icon">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
      </div>
     <div className= "weather-number">
      {temp}°C
     </div>
     <div className ="weather-main">
      {main}
     </div>
    </div>
  </div>
  )
}
