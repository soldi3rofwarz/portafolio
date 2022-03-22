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
import us from './assets/us.svg'
import ni from './assets/ni.svg'
import {useRive, useStateMachineInput} from 'rive-react'
import Switch from './assets/switch.riv'
import {useTranslation} from 'react-i18next'



function App() {

 const {i18n}= useTranslation("home","header","about")

  const {rive, RiveComponent}= useRive({
    src: Switch,
    stateMachines: "Switch",
    autoplay: true,
  })

const onClickInput = useStateMachineInput(
  rive,'Switch','Switch',
  
)


  return (
    <div className='app'>
      <div className='switch'>
      <img src={ni} className='ni' onClick={()=> i18n.changeLanguage('es')}/>
        <RiveComponent className='tg' onClick={()=>onClickInput.fire()}/>
        <img src={us} className='us' onClick={()=> i18n.changeLanguage('en')}/>
      </div> 
      
  
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
