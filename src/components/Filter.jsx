import React from 'react'
import { useContext } from 'react';
import second from '../assets/desktop/icon-search.svg'
import first from '../assets/mobile/icon-filter.svg'
import { GlobalContext } from './context/UserContext';

const Filter = () => {
    const x = window.innerWidth >= 1000 ? 'Full Time Only':'Full Time';
    const y = window.innerWidth >= 1000 ? 'Filter by title, companies, expertise...':'Filter by title...';
    const {theme} = useContext(GlobalContext)
    const searchInput = (
    <>
      <label className='label1'>
                    <input type="text"  className='text2' placeholder='Filter by location...'/>
                </label>
               <label className='label2'>
                    <input type="checkbox" className='checkbox' />
                    <span>{x}</span>
                    <input type="submit" value="Search" />
               </label>
    </>
    )
  return (
    <div className='filter'>
            <form className={theme? 'form darks_theme':'form'}>
                <label className='label'>
                <input type="text" className='text1' placeholder={y} />
                    <div className='search'>
                        <button className='btn1' type='button'>
                          <img src={first} alt="search" />
                        </button>
                        <button className='btn2' type='button'>
                          <img src={second} alt="filter" />
                        </button>
                    </div>
                </label>
                {searchInput}
            </form>
    </div>
  )
}

export default Filter