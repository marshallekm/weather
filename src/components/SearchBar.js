import React, {useState}  from 'react'
import SearchIcon from '../images/search.svg'

export default function SearchBar ({addCity}){
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
       <h2>WEATHER FRIEND </h2>
      </div>
      <div className="search-form">
      <form action='/' method='get' onSubmit={handleSubmit} className="search-bar">
        <input
        type="text"
        id="searchbar"
        name="city"
         autocomplete="off"
        onChange = {formChange}
        placeholder= "Search by city..."
        />
        <button type="submit">
        <img src= {SearchIcon} alt="" className="search-icon"/>
        </button>
      </form>
      </div>
    </div>
  )
}
