import React from 'react';
import { useContext } from 'react';
import second from '../assets/desktop/icon-search.svg';
import searchs from '../assets/desktop/icon-locate.svg';
import location from '../assets/desktop/icon-location.svg';
import first from '../assets/mobile/icon-filter.svg';
import { GlobalContext } from './context/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Filter = () => { 

    const [show, setShow] = useState(false)
    const [chck, setChck] = useState(false)
    const [filters, setFilters] = useState('')
    const [locate, setLocate] = useState('')

    const x = window.innerWidth >= 1000 ? 'Full Time Only':'Full Time';
    const y = window.innerWidth >= 1000 ? 'Filter by title, companies, expertise...':'Filter by title...';
    const {theme, setQuery, setLocation, setContract} = useContext(GlobalContext)



    function addFilter() {

      setQuery(filters)
      setLocation(locate)
      // setShow(!show)
      if (chck) {
        setContract('Full Time')
      } else{
        setContract('')
      }
    }
 
    function showMenu() {
      setShow(!show)
      document.body.classList.toggle('overflow')
      document.body.classList.toggle('over')

    }
    
    // useEffect(() => {
    //   document.documentElement.addEventListener('click', () =>{
    //     setShow(false)
    //   })
    // }, [])
    
   
  return (
    <div className='filter'>
            <form className={theme? 'form darks_theme':'form'} onSubmit={e =>{ e.preventDefault()}}>
                <label className='label'>
                <img src={searchs} alt="search"/>
                <input type="text" className='text1' placeholder={y} value={filters} onChange={e => setFilters(e.target.value) }/>
                    <div className='search'>
                        <button className='btn1' type='button' onClick={showMenu}>
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
                      value={locate}
                       onChange={e => setLocate(e.target.value) }
                       placeholder='Filter by location...'/>
                  </label>
                  <div className='label2'>
                      <label>
                        <input type="checkbox" className='checkbox' onClick={() => setChck(!chck)} />
                        <span>{x}</span>
                      </label>
                      <input type="submit" value="Search" onClick={addFilter} />
                  </div>
                </div>
            </form>
    </div>
  )
}

export default Filter