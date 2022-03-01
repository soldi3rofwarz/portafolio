import React, {useEffect, useState} from 'react';
import './styleHeader.css'
import menu from './../../assets/menu.png'



 const Header = () => {

    const [scrollnav, setscrollnav]= useState(false)
    const [toggle, settoggle]= useState(false)
    
  

    const pressToggle=()=>{
          let menu = document.querySelector(".toggle")
    menu.onclick = function() {
        menu.classList.toggle("action")
    }

    }
    const scrolling=()=>{
        if(window.scrollY >= 80){
            setscrollnav(true)
        }else{
            setscrollnav(false)
        }
    }
    window.addEventListener('scroll',scrolling)
     return (  
         <nav className={scrollnav? 'navbar active ': 'navbar'} >
             <div className='max-width'>
                <div className='logo'><a href='#'>Portafo<span>lio.</span></a></div>
                <ul className='menu'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Certifies</a></li>
                    <li><a href='#'>skills</a></li>
                    <li><a href='#'>projects</a></li>
                    <li><a href='#'>contact</a></li>
                </ul>
                <div className='toggle' onClick={pressToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
             </div>
         </nav>
     );
 }
  
 export default Header;