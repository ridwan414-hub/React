import { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
      const visitedCountriesList = [...visitedCountries, country];
      setVisitedCountries(visitedCountriesList);
  };

  return (
    <div>
          <h1>Total Country :{countries.length}</h1>
          <h2>Visited Country:{visitedCountries.length}</h2>
      <div className="box">
        {countries.map((country) => (
          <Country
            key={countries.cca2}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
