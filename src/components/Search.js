import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import './search.css'

const Search = ({onSearch, onFilter }) => {

    const [showRegion, setShowRegion] = useState(false)

    const [countryInput, setCountryInput] = useState('')

    const [value, setValue] = useState("Filter by Region")


    const submitHandler = (e) => {
        e.preventDefault()
        onSearch(countryInput.toLowerCase())
       
    }


   
  return (
    <div className='country__info-section'>
        <div className='country__search'>
            <FiSearch  size={27} className='search-icon mode-icon' onClick={submitHandler}/>
            <input placeholder='Search for a country...' onChange={(e) => setCountryInput(e.target.value)} />
        </div>

        <div className='country__filter'>

            <div id='selectField' onClick={() => setShowRegion(!showRegion)} >
                <p>{value}</p>
                {showRegion ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showRegion && 
            
            <ul id='list' >
                <li className='options'>
                    <p onClick={() => {
                        onFilter("africa"); 
                        setValue("Africa"); 
                        setShowRegion(false);}}

                        >
                            Africa
                    </p>
                </li>

                <li className='options'>
                    <p onClick={() => {
                        onFilter("america"); 
                        setValue("America"); 
                        setShowRegion(false)}}
                        >
                        America
                    </p>
                </li>

                <li className='options'>
                    <p onClick={() => {
                        onFilter("asia"); 
                        setValue("Asia"); 
                        setShowRegion(false)}}
                        >
                            Asia
                    </p>
                
                </li>

                <li className='options'>
                    <p onClick={() => {
                        onFilter("europe"); 
                        setValue('Europe'); 
                        setShowRegion(false)}}
                        >
                            Europe
                    </p>
                </li>

                <li className='options'>
                    <p onClick={() => {
                        onFilter("oceania"); 
                        setValue("Oceania"); 
                        setShowRegion(false)}}
                        >
                            Oceania
                    </p>
                </li>
               
            </ul>}

        </div>
    </div>
  )
}

export default Search