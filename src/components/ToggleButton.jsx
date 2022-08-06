import React from 'react'

const ToggleButton = () => {
  return (
    <div className='toggle-switch'>
        <label>
            <input type="checkbox" />
            <span className='slider'></span>
        </label> 
    </div>
  )
}

export default ToggleButton