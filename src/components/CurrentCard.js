import React from 'react'

export default function CurrentCard ({icon, weather, description}){
  return (
 <div className="current-body">
  <h3 className="current-title">Current Weather</h3>
  <div className="current-icon">
  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
  </div>
  <div className="current-main">
  <div>{weather}°C</div>
  </div>
  <div className="current-description">
   {description}
  </div>
 </div>
  )
}
