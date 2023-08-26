import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { useRef } from 'react';
import { GlobalContext } from './context/UserContext';


const Job = ({id,company,logo,logoBackground,position,postedAt,location,contract}) => {
  const item = useRef(null)
  const {theme} = useContext(GlobalContext)

  
  useEffect(() => {
   
    window.addEventListener('scroll', onScroll)
    function onScroll(e) {
      e.preventDefault()
     scrolling()
    }
    const elem = item.current 

    document.addEventListener('DOMContentLoaded',scrolling())
     
    function scrolling(){
      if (visible(elem)) {
        elem.classList.add('active')
      }else{
        elem.classList.remove('active')
      }
    }
    function visible(arg) {
      const elem = arg.getBoundingClientRect()
      const bottom = elem.bottom
      const height = elem.height
      return (height + window.innerHeight >= bottom)
  }
  return () => {
    document.removeEventListener('DOMContentLoaded', scrolling())
  }
  }, [])
   
  return (
    
      <div className={theme ? 'job dark_theme':'job'} ref={item}>
        <Link to={`/${id}`}>
          <div className="img" style={{backgroundColor:logoBackground }}>
              <img src={logo} alt="logo" />
          </div>
          <div className="text">
              <p>{postedAt} <span></span> {contract} </p>
              <h4>{position}</h4>
              <p>{company}</p>
          </div>
          <div className="region">
              <p>{location}</p>
          </div>
        </Link>
      </div>
  
  )
}

export default Job