import React from 'react'
import second from '../assets/desktop/icon-search.svg'

const Filter = () => {
    const x = window.innerWidth >= 1000 ? 'Full Time Only':'Full Time';
    const y = window.innerWidth >= 1000 ? 'Filter by title, companies, expertise...':'Filter by title...';
  return (
    <div className='filter'>
            <form>
                <label className='label'>
                <input type="text" className='text1' placeholder={y} />
                    <div className='search'>
                        <div className='fil'>
                        </div>
                        <input type="submit" value={second}/>
                    </div>
                </label>
                <label className='label1'>
                    <input type="text"  className='text2' placeholder='Filter by location...'/>
                </label>
               <label className='label2'>
                    <input type="checkbox" className='checkbox' />
                    <span>{x}</span>
                    <input type="submit" value="Search" />
               </label>
            </form>
    </div>
  )
}

export default Filter