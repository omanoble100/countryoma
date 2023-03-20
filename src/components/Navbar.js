import React, { useState, useEffect } from 'react'
import './navbar.css'
import {BsMoonFill, BsFillSunFill } from 'react-icons/bs'



const Navbar = () => {

  const [bgmode, setBgmode] = useState(false);

  const changeMode=()=> {
    setBgmode(!bgmode)
  }
  
  useEffect(() => {
    if(bgmode === false){
      document.body.classList.add("light")
  
    }else {
      document.body.classList.remove("light")
    }
  })
  
  
  return (
    
    <div className='nav' >
        <div className='country__heading'>
            <h2>Where in the world?</h2>
        </div>

        <div className='background__mode'>
                <div className='img-mode' onClick={() => setBgmode(!bgmode)}>
                    {bgmode ? <BsFillSunFill size={20}  className='mode-icon' />:  < BsMoonFill size={20}  className='mode-icon'/>}
                </div>

                <div className='text-mode'  onClick={changeMode}>
                   {bgmode ?  <p>Light Mode</p>:  <p>Dark Mode</p>}
                    
                </div>
        </div>
    </div>
  )
}

export default Navbar