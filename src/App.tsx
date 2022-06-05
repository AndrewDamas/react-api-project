import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Movies from './components/Movies';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
      <Header/>
      <Movies/>
      <Popular/>
    </div>
  );
}

export default App;
