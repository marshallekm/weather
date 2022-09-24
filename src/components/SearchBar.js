import React, {useState}  from 'react'

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
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.city}&appid=${API_KEY}&units=metric`)
  //  .then((res) => res.json())
  //  .then((data) => {
  //   console.log(data);
  //  });
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
