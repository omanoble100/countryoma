import React from 'react'
import './card.css'


const Card = ({imgurl, country, population, region, capital}) => {
  return (
    <div className='country__diplay-section'>
        <div className='country__flag'>
            <img src= {imgurl} />
          </div>  
        <div className='country__details'>
            <h3>{country}</h3>
            
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
           
           
        </div>
    </div>
  )
}

export default Card