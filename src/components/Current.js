import React from 'react'
import CurrentCard from './CurrentCard'

export default function Current({addCurrent}){
  return(
    <div className="current-temp">
        <CurrentCard
        temp = {addCurrent.temp}
        weather = {addCurrent.weather}
        main = {addCurrent.main}
        description ={addCurrent.description}
        />
    </div>
  )
}
