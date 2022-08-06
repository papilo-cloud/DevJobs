import React from 'react'

const Job = ({id,company,logo,logoBackground,position,postedAt,location,contract}) => {
  console.log(company);
  return (
    <div className='job'>
        <div className="img" style={{backgroundColor:logoBackground }}>
            <img src={logo} alt="logo" />
        </div>
        <div className="text">
            <p>{postedAt} <span>.</span> {contract} </p>
            <h4>{position}</h4>
            <p>{company}</p>
        </div>
        <div className="rerion">
            <p>{location}</p>
        </div>
    </div>
  )
}

export default Job