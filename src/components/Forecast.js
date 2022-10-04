import React from 'react'

export default function Forecast({addForecast}){
 return (
<div>
<div className="City">
{JSON.stringify(addForecast.city.name)}
</div>
</div>
 )

}
