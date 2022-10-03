import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/UserContext'
import Filter from './Filter'
import Job from './Job'

const Jobs = () => {
    const [more, setMore] = useState(12)
    const [show, setShow] = useState(true)
    const {Filters,data} = useContext(GlobalContext)
     
    return (
      <>
      <Filter />
      <div className='jobs'>
          {Filters().slice(0,more).map((job, x) =>  <Job key={x} {...job} />)}
      </div>
      {Filters().length >= 10 ? <button className='btn'
        style={{display: show? 'block':'none'}} 
        onClick={() =>{setMore(prev => prev + 10); setShow(!show)}}>
        Load More
      </button>: ''}
    </>
  )
}

export default Jobs