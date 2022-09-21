import React, {useState}  from 'react'

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


  console.log({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
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
