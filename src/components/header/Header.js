import React, {useEffect, useState} from 'react';
import './styleHeader.css'
import {Link} from 'react-scroll'
import {useRive} from 'rive-react';
import bird from './../../assets/bird.riv'
import logo2 from './../../assets/logo2.png'
import {useTranslation} from 'react-i18next'


 const Header = () => {
    const {t}= useTranslation("header")

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
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='home' smooth={true} duration={1000}>{t("header.inicio")}</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='about' smooth={true} duration={1000}>{t("header.about")}</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='project' smooth={true} duration={1000}>{t("header.proyectos")}</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='skills' smooth={true} duration={1000}>{t("header.habilidades")}</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='certificates' smooth={true} duration={1000}>{t("header.certificados")}</Link></li>
                        <li><Link className={sidebar?'a active': 'a'} onClick={showsidebar} to='contact' smooth={true} duration={1000}>{t("header.contacto")}</Link></li>
                        <div className='birda'><RiveComponent className='bird'/></div>
                    </ul>
                    
                  
             </div>
             
         </nav>
     );
 }
  
 export default Header;