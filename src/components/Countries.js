import React, { useState, useEffect } from 'react'
import './countries.css'
import Search from './Search'


import Card from './Card'
import { Link } from 'react-router-dom'

const Countries = () => {

  const [countries, setCountries] = useState([])


  const getAllCountries= () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => setCountries(data))

  }

  const getCountryBySearch = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => setCountries(data))

  }

  const getCountryByRegion = (countryRegion) => {
    fetch(`https://restcountries.com/v3.1/region/${countryRegion}`)
    .then(response => response.json())
    .then(data => setCountries(data))

  }
     
  useEffect(() => {
        getAllCountries()

    }, []);

  return (

    <div>

    <Search  onSearch={getCountryBySearch} onFilter={getCountryByRegion} />
        <div className='country__all'>
        
        
          {countries.map(country =>
            <Link to={`/country/${country.name.common}`} key={country.name.common}>
              <Card  
              country ={country.name.common} 
              imgurl={country.flags.png}
              population={country.population.toLocaleString()}
              region ={country.region}
              capital = {country.capital}
              
              />
            </Link>
            )}
      </div>
    
    </div>
    
  )
}

export default Countries