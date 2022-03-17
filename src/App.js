import React,{useState} from 'react';
import './App.css';
//*-************************
import Header from './components/header/Header'
import Home from './components/Home/home'
import About from './components/About/About';
import ProjectModule from './components/projectModule/project'
import Skills from './components/skills/skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
//************************************** 
import AboutEn from './componentsEn/AboutEn/AboutEn';

import {Switch} from 'antd'
import 'antd/dist/antd.css';






function App() {
const [toggle, setToggle]= useState(false)

const pressSwitch =()=>setToggle(!toggle)

  return (
    <div className='app'>
      <div className='switch'><span>Es</span><Switch className='tg' onClick={pressSwitch}/><span>En</span></div> 
      
      {toggle? 
      <>
      <Header/>
      <Home/>
      <AboutEn/>
      <ProjectModule/>
      <Skills/>
      <Certificates/>
      <Contact/>
      <Footer/>
      </> :
      <>
       <Header/>
      <Home/>
      <About/>
      <ProjectModule/>
      <Skills/>
      <Certificates/>
      <Contact/>
      <Footer/>
      </>
      }


     
    </div>
    

  );
}

export default App;
