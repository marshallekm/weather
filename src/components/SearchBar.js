export default function SearchBar (){
  return (
    <div>
      <form action='/' method='get'>
        <input
        type="text"
        id="searchbar"
        name ="search"
        placeholder= "How's the weather in..."
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
