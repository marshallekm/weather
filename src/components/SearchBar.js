import React, {useState}  from 'react'

export default function SearchBar ({addCity, addPlace}){
  const [search, setSearch] = useState(
    {
      city: ""
    }
  )

  const formChange = (event) => {
    const {name, value} = event.target
    setSearch(prevSearch => ({
     ...prevSearch,
     [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addCity(search)
  }

  return (
    <div className= "searchbar">
      <div className="app-name">
       <p>Weather Friend </p>
      </div>
      <form action='/' method='get' onSubmit={handleSubmit}>
        <input
        type="text"
        id="searchbar"
        name="city"
        onChange = {formChange}
        placeholder= "Search by city..."
        />
        <button type="submit">
          Search
        </button>
      </form>
         <div className= "place">
        {addPlace}
        </div>
    </div>
  )
}
