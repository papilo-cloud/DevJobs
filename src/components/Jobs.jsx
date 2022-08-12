import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/UserContext'
import Job from './Job'


const Jobs = () => {
    const {data, visible} = useContext(GlobalContext)
    // console.log(visible)

    return (
    <div className='jobs'>
        {data.map((job, x) =>  <Job key={x} {...job} visible={visible} />)}
    </div>
  )
}

export default Jobs