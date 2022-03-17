import React,{useState} from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/home'
import About from './components/About/About';
import ProjectModule from './components/projectModule/project'
import Skills from './components/skills/skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import {Switch} from 'antd'
import 'antd/dist/antd.css';






function App() {
const [toggle, setToggle]= useState(false)

const pressSwitch =()=>setToggle(!toggle)

  return (
    <div className='app'>
      <div className='switch'><span>Es</span><Switch className='tg'/><span>En</span></div> 
      



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
