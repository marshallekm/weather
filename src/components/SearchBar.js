import React, {useState}  from 'react'
const API_KEY = process.env.REACT_APP_API_KEY;

export default function SearchBar (){
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.city}&appid=${API_KEY}`)
   .then((res) => res.json())
   .then((data) => {
    console.log(data);
   });
  }

  return (
    <div>
      <form action='/' method='get' onSubmit={handleSubmit}>
        <input
        type="text"
        id="searchbar"
        name="city"
        onChange = {formChange}
        placeholder= "Search for a city..."
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
