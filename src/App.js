import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/home'
import About from './components/About/About';
import ProjectModule from './components/projectModule/project'
import Skills from './components/skills/skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';





function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <About/>
      <ProjectModule/>
      <Skills/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
    

  );
}

export default App;
