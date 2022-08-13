import React, { useContext } from 'react'
import { GlobalContext } from './context/UserContext'

const ToggleButton = () => {

  const {setTheme,theme} = useContext(GlobalContext)
  console.log(theme)
  const handleClick= () =>{
    setTheme(!theme)
  }
  return (
    <div className='toggle-switch'>
        <label>
            <input type="checkbox" onClick={handleClick} />
            <span className='slider'></span>
        </label> 
    </div>
  )
}

export default ToggleButton