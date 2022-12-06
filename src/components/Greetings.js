import React from 'react'

export default function Greetings ({addPlace}) {
let today = new Date();
let time = today.getHours()

  const greetingMessage = (time) => {
   if (time < 12) {
    return "Good morning"
   } else if (time < 18 ) {
    return "Good afternoon"
   } else {
    return "Good evening"
   }
  }
  return(
    <div className="greeting">
      <h2>{greetingMessage(time)}.</h2>
        Here's the weather for {addPlace}.
      </div>
  )
}
