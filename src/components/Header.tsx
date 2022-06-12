import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'
import Search from './Search';

function Header() {

  const [show, setShow] = useState(false);
  
  return (<div>
    <header>
        <h2 className="logo"><i className="fa-solid fa-trash-can"></i>MOVIE JUNKIE</h2>
        <ul>
            {/* <li>Movies</li> */}
            {/* <li>Watchlist </li> */}
            <li>
              <NavLink to="/watch-list">
              <i className="fa-solid fa-heart"></i> 
              </NavLink>
            </li>
            <li><i className="fa-solid fa-filter"></i></li>
            <li><i className="fa-solid fa-magnifying-glass" onClick={(e) =>{
              show === false ? setShow(true) : setShow(false);
            }}></i></li>
            <li><a href=""><i className="fa-solid fa-house"></i></a></li>
        </ul>
    </header>
    <p className={show === true ? '' : 'hidden'}><Search/></p>
    </div>
  )
}

export default Header;