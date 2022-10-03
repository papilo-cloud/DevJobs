import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/UserContext'
import Job from './Job'


const Jobs = () => {
    const [more, setMore] = useState(10)
    const [show, setShow] = useState(true)
    const {Filter,data} = useContext(GlobalContext)
   console.log(data.length);
     
    return (
      <>
      <div className='jobs'>
          {Filter().slice(0,more).map((job, x) =>  <Job key={x} {...job} />)}
      </div>
      {Filter().length >= 10 ? <button className='btn'
        style={{display: show? 'block':'none'}} 
        onClick={() =>{setMore(prev => prev + 10); setShow(!show)}}>
        Load More
      </button>: ''}
    </>
  )
}

export default Jobs