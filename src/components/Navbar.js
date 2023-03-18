import React, { useState } from 'react'
import './navbar.css'
import {BsMoonFill, BsFillSunFill } from 'react-icons/bs'



const Navbar = () => {

  const [bgmode, setBgmode] = useState(false);

  
  return (
    
    <div className='nav' >
        <div className='country__heading'>
            <h2>Where in the world?</h2>
        </div>

        <div className='background__mode'>
                <div className='img-mode' onClick={() => setBgmode(!bgmode)}>
                    {bgmode ? <BsMoonFill size={20} color='white' />: <BsFillSunFill size={20} color='white'/>}
                </div>

                <div className='text-mode' onClick={() => setBgmode(!bgmode)}>
                   {bgmode ? <p>Dark Mode</p>: <p>Light Mode</p>}
                    
                </div>
        </div>
    </div>
  )
}

export default Navbar