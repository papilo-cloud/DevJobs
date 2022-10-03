import React from 'react';
import { useContext } from 'react';
import second from '../assets/desktop/icon-search.svg';
import searchs from '../assets/desktop/icon-locate.svg';
import location from '../assets/desktop/icon-location.svg';
import first from '../assets/mobile/icon-filter.svg';
import { GlobalContext } from './context/UserContext';
import { useState } from 'react';

const Filter = () => { 

    const [show, setShow] = useState(false)
    const [filters, setFilters] = useState('')

    const x = window.innerWidth >= 1000 ? 'Full Time Only':'Full Time';
    const y = window.innerWidth >= 1000 ? 'Filter by title, companies, expertise...':'Filter by title...';
    const {theme, setQuery, setLocation, setSearch, srch} = useContext(GlobalContext)

    const onFilter = () =>{

      setSearch(true)
      setTimeout(() =>{
        setSearch(false)
        alert(srch)
      }, 1500)
    }

    console.log(filters);
    function addFilter() {
      // console.log('hello')
      setQuery(filters)
    }
   
  return (
    <div className='filter'>
            <form className={theme? 'form darks_theme':'form'} onSubmit={e =>{ e.preventDefault()}}>
              {/* <div> */}
                <label className='label'>
                <img src={searchs} alt="search"/>
                <input type="text" className='text1' placeholder={y} value={filters} onChange={e => setFilters(e.target.value) }/>
                    <div className='search'>
                        <button className='btn1' type='button' onClick={() => setShow(!show)}>
                          <img src={first} alt="search" />
                        </button>
                        <button className='btn2' type='button'>
                          <img src={second} alt="filter"  onClick={addFilter}/>
                        </button>
                    </div>
                </label>

                <div className={show ? 'lbl show': 'lbl'}>
                  <label className='label1'>
                    <img src={location} alt="location"/>
                      <input type="text"  className='text2'
                       onChange={e => setLocation(e.target.value) }
                       placeholder='Filter by location...'/>
                  </label>
                  <div className='label2'>
                      <label>
                        <input type="checkbox" className='checkbox' />
                        <span>{x}</span>
                      </label>
                      <input type="submit" value="Search" onClick={onFilter} />
                  </div>
                </div>
            </form>
    </div>
  )
}

export default Filter