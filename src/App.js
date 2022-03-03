import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/home'
import About from './components/About/About';
import Certificates from './components/cetificated/certificates'
import Skills from './components/skills/skills';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <About/>
      <Certificates/>
      <Skills/>
    </div>
    

  );
}

export default App;
