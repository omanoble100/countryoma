import React, { useState, useEffect } from 'react'
import './countries.css'
import Search from './Search'


import Card from './Card'
import { Link } from 'react-router-dom'

const Countries = () => {

  const [countries, setCountries] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState('')


  const getAllCountries= () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {setCountries(data); setIsLoading(false)})

    .catch((err) => { setIsLoading(false); setError(err.message)})
      
  }

  const getCountryBySearch = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {setCountries(data); setIsLoading(false)})

    .catch((err) => { setIsLoading(false); setError(err.message)})

  }

  const getCountryByRegion = (countryRegion) => {
    fetch(`https://restcountries.com/v3.1/region/${countryRegion}`)
    .then(response => response.json())
    .then(data => {setCountries(data); setIsLoading(false)})

    .catch((err) => { setIsLoading(false); setError(err.message)})

  }
     
  useEffect(() => {
        getAllCountries()

    }, []);

  return (

  <div className='countries__section'>

    <Search  onSearch={getCountryBySearch} onFilter={getCountryByRegion} />
      {isLoading && !error && <h4>Loading.......</h4>}
            {error && !isLoading && <h4>{error}</h4>}
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