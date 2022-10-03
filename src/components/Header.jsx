import React from 'react'
import ToggleButton from './ToggleButton'
import img1 from '../assets/desktop/icon-sun.svg'
import img2 from '../assets/desktop/icon-moon.svg'

const Header = () => {
  return (
    <header> 
        <div className='div1'> 
            <a href="#">devjobs</a>
        </div>
        <div className="div">
          <img src={img1} alt="logo_sun" />
          <ToggleButton />
          <img src={img2} alt="logo_moon" />
        </div>
           
    </header>
  )
}

export default Header