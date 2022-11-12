import React from 'react'

export default function CurrentCard ({icon, weather}){
  return (
 <div className="current-body">
  <div className="current-icon">
  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
  </div>
  <div className="current-temp">
  </div>
  <div className="current-main">
  <div>{weather}°C</div>
  </div>
  <div className="current-description">

  </div>

 </div>
  )
}
