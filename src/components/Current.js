import React from 'react'
import CurrentCard from './CurrentCard'

export default function Current({addCurrent, addCurrentIcon}){
  console.log("test")
  console.log(typeof(addCurrentIcon))
  return(
    <div className="current-temp">
        <CurrentCard
        weather = {addCurrent}
        icon ={addCurrentIcon}
        />
    </div>
  )
}
