
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import FilteredContext from '../context/FilterContext';
import '../styles/Header.css'
import Filter from './Filter';
import Search from './Search';

function Header() {
  const {filteredMovies, showFilter, setShowFilter1, addFilteredMovies} = useContext(FilteredContext);

  const [showSearch, setShowSearch] = useState(false);
  
  return (<div>
    <header>
        <NavLink to='/' className="logo"><i className="fa-solid fa-trash-can"></i>MOVIE JUNKIE</NavLink>
        <ul>
            <li>
              <NavLink to="/watch-list">
              <i className="fa-solid fa-heart"></i> 
              </NavLink>
            </li>
            <li><i className="fa-solid fa-filter"></i></li>
            <li>Watchlist</li>
            <li><i className="fa-solid fa-filter" onClick={(e) =>{
              setShowFilter1();
            }}></i></li>
            <li><i className="fa-solid fa-magnifying-glass" onClick={(e) =>{
              showSearch === false ? setShowSearch(true) : setShowSearch(false);
            }}></i></li>
            <li><NavLink to="/"><i className="fa-solid fa-house"></i></NavLink></li>
        </ul>
    </header>
    <div>
      <p className={showSearch === true ? '' : 'hidden'}><Search/></p>
      <p className={showFilter === true ? '' : 'hidden'}><Filter/></p>
    </div>
    
    </div>
  )
}

export default Header;