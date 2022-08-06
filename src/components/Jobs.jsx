import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/UserContext'
import Job from './Job'


const Jobs = () => {
    const {data} = useContext(GlobalContext)
    console.log(data);
  return (
    <div className='jobs'>
        <Job />
    </div>
  )
}

export default Jobs