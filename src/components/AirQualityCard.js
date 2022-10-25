import React from 'react'

export default function AirQualityCard({key, aqi, pm2_5}){
  return(
    <div className= "air-body">
      <div className= 'air-aqi'>
       Air Quality Index:{aqi}
      </div>
      <div className= "air-pm2_5" >
       PM2.5 Level: {pm2_5}
      </div>
    </div>
  )
}
