import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Movies from './components/Movies';
import Popular from './components/Popular';
import Search from './components/Search';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import WishList from './components/WishList';
import Watchlist from './components/WatchList';
import Filter from './components/Filter';
import FilterPage from './components/FilterPage';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/details/:id" element={<InfoPage/>}/>
          <Route path='/filter' element={<FilterPage/>} />
          
          <Route path="/watch-list" element={<Watchlist/>}/>

          <Route path='/search' element={<SearchPage/>}/>
          
        </Routes>
      </Router>
      {/* <Search/> */}
      {/* <HomePage/> */}
      {/* <Movies/> */}
      {/* <Popular/> */}
    </div>
  );
}

export default App;