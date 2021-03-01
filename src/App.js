import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const addCountry = (country) => {
    console.log(country);
  };

  return (
    <div className="App">
      <h1>Countries loaded:{countries.length}</h1>
      <h4>Country added:</h4>
      {countries.map((country) => (
        <Country
          country={country}
          addCountry={addCountry}
          key={country.alpha3Code}
        ></Country>
      ))}
      <header className="App-header"></header>
    </div>
  );
}

export default App;
