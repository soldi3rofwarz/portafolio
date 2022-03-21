import React, {useEffect, useState} from 'react';
import './styleHeader.css'
import {Link} from 'react-scroll'
import {useRive,useStateMachineInput} from 'rive-react';
import bird from './../../assets/bird.riv'
import logo2 from './../../assets/logo2.png'


 const Header = () => {

    const {rive, RiveComponent}= useRive({
        src: bird,
        animations: 'slowDance',
        stateMachines: 'look up',
        autoplay: true,
      })





    const [scrollnav, setscrollnav]= useState(false)
    const [sidebar, setsidebar]= useState(false)

    const showsidebar = ()=>setsidebar(!sidebar)
   
    const scrolling=async()=>{
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
             <div className='logo'><img src={logo2} className='img'/></div>
                    <div className={sidebar?'toggle action': 'toggle'} onClick={showsidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
               
                    <ul className={sidebar? 'menu active': 'menu'} >
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='home' smooth={true} duration={1000}>Inicio</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='about' smooth={true} duration={1000}>Acerca de</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='project' smooth={true} duration={1000}>proyectos</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='skills' smooth={true} duration={1000}>Habilidades</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='certificates' smooth={true} duration={1000}>Certificados</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='contact' smooth={true} duration={1000}>contacto</Link></li>
                        <div className='birda'><RiveComponent className='bird'/></div>
                    </ul>
                    
                  
             </div>
             
         </nav>
     );
 }
  
 export default Header;