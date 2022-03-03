import React, {useEffect, useState} from 'react';
import './styleHeader.css'



 const Header = () => {

    const [scrollnav, setscrollnav]= useState(false)
    


    const pressToggle=()=>{
        let menu = document.querySelector(".toggle")
        let click= document.querySelector(".menu")
        
        menu.onclick = function() {
        menu.classList.toggle("action")
        click.classList.toggle("active")
    }

    }
    const scrolling=()=>{
        if(window.scrollY >= 80){
            setscrollnav(true)
        }else{
            setscrollnav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',scrolling)
      }, []);
    
     return (  
         <nav className={scrollnav? 'navbar active ': 'navbar'} >
             <div className='max-width'>
                <div className='logo'><a href='#'>Portafo<span>lio.</span></a></div>
                <ul className='menu'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Certificates</a></li>
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