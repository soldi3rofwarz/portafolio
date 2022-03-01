import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/home'
import About from './components/About/About';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <About/>
    </div>
    

  );
}

export default App;
