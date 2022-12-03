import React from 'react'
import Smile1 from '../images/smile1.svg'
import Smile2 from '../images/smile2.svg'
import Smile3 from '../images/smile3.svg'
import Smile4 from '../images/smile4.svg'
import Smile5 from '../images/smile5.svg'

export default function AirQualityCard({aqi, pm2_5}){
  const airQuality= () => {
   if (aqi === 1 ) {
    return <div className="good">Good
    <img src={Smile1} alt="" />
    </div>
   }else if (aqi === 2 ) {
    return <div className="fair">Fair
     <img src={Smile2} alt="" />
    </div>
   }else if (aqi === 3 ) {
    return <div className="moderate">Moderate
    <img src={Smile3} alt="" />
    </div>
   }else if (aqi === 4) {
    return <div className="poor">Poor
    <img src={Smile4} alt="" />
    </div>
   }else if (aqi === 5){
    return <div className="very-poor">Very Poor
     <img src={Smile5} alt="" />
    </div>
   }
  }
  return(
    <div className= "air-body">
      <h3 className="air-title">Air Quality Index</h3>
      <div className= 'air-aqi'>
       {airQuality({aqi})}
      </div>
      {/* <div className= "air-pm2_5" >
       PM2.5 <span></span>{pm2_5}
      </div> */}
    </div>
  )

}
