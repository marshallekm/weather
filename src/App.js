import SearchBar from './components/SearchBar.js'
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
// const [lat, setLat] = useState();
// const [long, setLong] = useState();

const API_KEY = process.env.REACT_APP_API_KEY;

useEffect(() => {
//   navigator.geolocation.getCurrentPosition(function(position){
//   setLat(position.coords.latitude);
//   setLong(position.coords.longitude);
//   });
// }, [lat, long]);




})

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
