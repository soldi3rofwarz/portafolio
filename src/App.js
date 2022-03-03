import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/home'
import About from './components/About/About';
import Certificates from './components/cetificated/certificates'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <About/>
      <Certificates/>
    </div>
    

  );
}

export default App;
