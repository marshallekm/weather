import React from 'react'

export default function AirQualityCard({aqi, pm2_5}){
  const airQuality= () => {
   if (aqi === 1 ) {
    return <div className="good">Good</div>
   }else if (aqi === 2 ) {
    return <div className="fair">Fair</div>
   }else if (aqi === 3 ) {
    return <div className="moderate">Moderate</div>
   }else if (aqi === 4) {
    return <div className="poor">Poor</div>
   }else if (aqi === 5){
    return <div className="very-poor">Very Poor</div>
   }
  }
  return(
    <div className= "air-body">
      <div className= 'air-aqi'>
       Air Quality Index {airQuality({aqi})}
      </div>
      <div className= "air-pm2_5" >
       PM2.5 <span></span>{pm2_5}
      </div>
    </div>
  )

}
