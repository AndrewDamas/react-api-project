import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Movies from './components/Movies';
import Popular from './components/Popular';
import Search from './components/Search';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Search/> */}
      <HomePage/>
      {/* <Movies/> */}
      {/* <Popular/> */}
    </div>
  );
}

export default App;
