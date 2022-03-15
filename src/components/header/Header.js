import React, {useEffect, useState} from 'react';
import './styleHeader.css'
import {Link} from 'react-scroll'



 const Header = () => {

    const [scrollnav, setscrollnav]= useState(false)
    const [sidebar, setsidebar]= useState(false)

    const showsidebar = ()=>setsidebar(!sidebar)


   
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
                    <div className={sidebar?'toggle action': 'toggle'} onClick={showsidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
               
                    <ul className={sidebar? 'menu active': 'menu'} >
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='about' smooth={true} duration={1000}>About</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='project' smooth={true} duration={1000}>projects</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='skills' smooth={true} duration={1000}>skills</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='certificates' smooth={true} duration={1000}>Certificates</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='contact' smooth={true} duration={1000}>contact</Link></li>
                    </ul>
                    
                  
             </div>
             
         </nav>
     );
 }
  
 export default Header;