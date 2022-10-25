import React from 'react'
import AirQualityCard from './AirQualityCard'

export default function AirQuality({addAir}){
  return (
    <div>
      {addAir.map(({key, main,components}) => (
        <AirQualityCard
        key ={key}
        aqi = {main.aqi}
        pm2_5= {components.pm2_5}
        />
      ))}
    </div>
  )
}
