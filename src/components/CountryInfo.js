import React, { useEffect, useState } from 'react'
import './countryinfo.css'

// import image1 from '../assets/belgium.jpg'
import { Link, useParams } from 'react-router-dom'


const CountryInfo = () => {

  const [country, setCountry] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState('')

  const {countryName} = useParams();

  
  const getCountryBySearch = () => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {setCountry(data); setIsLoading(false)})

    .catch((err) => { setIsLoading(false); setError(err.message)})

    
  }

   useEffect(() => {
      getCountryBySearch()

  }, [countryName])
  
  return (
    <div className='country__info'>
     
      <Link to='/'><button className='country__back-button'>Back</button></Link>
      {isLoading && !error && <h4>Loading.......</h4>}
            {error && !isLoading && <h4>{error}</h4>}
        {
         country.length > 0 ? country?.map((country, index) =>(
            <div className='country__details-info' key={country.name.common + index}>
                <div className='country-flag-info'>
                  <img src={country.flags.png}/>
                </div>

                <div className='country__information-info'>
                    <h3>{country?.name?.common?.toUpperCase()}</h3>

                    <div>
                        <div className='country-information'>
                            <div>
                              {/* {country.nativeName (<span key={native.common}>{native.common}</span>)): <p>No native name</p>} */}
                              <p> <strong>Native Name :</strong> {country.nativeName ? country.nativeName?.map(native => <p>{native.common}</p>): <p>No native name</p>}</p>
                              <p> <strong>Population :</strong> {country.population.toLocaleString()}</p>
                              <p> <strong>Region :</strong> {country.region}</p>
                              <p> <strong>Sub Region :</strong> {country.subregion}</p>
                              <p> <strong>Capital:</strong> {country.capital}</p>
                            </div>
                            <div>
                              <p> <strong>Top Level Domain :</strong> {country.tld[0]}</p>

                            {/* <p> <strong>Currencies :</strong> {country?.currencies?.map(currency => {<span>{currency.name}</span>})}</p> */}
                              {/* <p> <strong>Languages :</strong> {country?.languages?.map(language => (<span>{language}</span>))}</p> */}
                            </div>
                        </div>

                      <div className='country__borders'>
                          <p><strong>Border Countries :</strong></p>

                          { country.borders ? country?.borders?.map(border => (
                            <div className='display-borders' key={border}>
                                <button >{border}</button>
                            </div>
                          )): <p>Shares no borders</p>}
                          
                          
                      </div>
                        
                    </div>

                    
                </div>
            </div>
          )) : null
        }
    </div>
  )
}

export default CountryInfo
