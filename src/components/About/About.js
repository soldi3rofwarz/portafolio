import React from 'react';
import './styleAbout.css'
import Rive from 'rive-react'
import about from './../../assets/about.riv'
import Typewriter from 'typewriter-effect';
import Cv from './../../assets/cv.pdf'
import {useTranslation} from 'react-i18next'


const About = () => {
    const {t}= useTranslation("about")
    return ( 
        <section className='about' id='about'>
            <div className='max-width'>
                <h2 className='title'>{t("about.title")}</h2>
                <div className='about-content'>
                    <div className='column left'>
                     <Rive src={about} alt='about' className='img'/>
                    </div>
                    <div className='column right'>
                        <div className='text'>{t("about.name")} <span><Typewriter onInit={(typewriter)=>{
                       typewriter
                       .typeString('Web Developer').pauseFor(1000).deleteAll().start()
                    }}options={{string:['Web Developer'], autoStart:true,loop: true}} /></span></div>
                      <p>
                      {t("about.p")}
                      </p>
                      <a href={Cv} download='JoseCv.pdf'>{t("about.button")}</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;