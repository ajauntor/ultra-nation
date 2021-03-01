import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/country/Country';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data=>setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddCountry = (country) => {console.log("Country Added", country);}

  return (
    <div className="App">

    <ul>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country> )
      }
    </ul>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
