import React from 'react'

export default function CurrentCard ({icon, temp, weather, description}){
  return (
 <div className="current-body">
  <div classname="current-icon">
  {icon}
  </div>
  <div className="current-temp">
  {temp}
  </div>
  <div className="current-main">
  {weather}
  </div>
  <div className="current-description">
  {description}
  </div>

 </div>
  )
}
