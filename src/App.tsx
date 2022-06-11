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

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/details/:id" element={<InfoPage/>}/>
          
          <Route path="/" element={<WishList/>}/>
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
