import React from 'react'
import './navbar.css'
import {BsMoonFill } from 'react-icons/bs'





const Navbar = () => {

  
  return (
    <div className='nav' >
        <div className='country__heading'>
            <h2>Where in the world?</h2>
        </div>

        <div className='background__mode'>
                <div className='img-mode'>
                    <BsMoonFill size={20} color='white' />
                </div>

                <div className='text-mode' >
                    <p>Light Mode</p>
                </div>
        </div>
    </div>
  )
}

export default Navbar