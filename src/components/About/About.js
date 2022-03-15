import React from 'react';
import './styleAbout.css'
import Rive from 'rive-react'
import about from './../../assets/about.riv'
import Typewriter from 'typewriter-effect';

const About = () => {
    return ( 
        <section className='about' id='about'>
            <div className='max-width'>
                <h2 className='title'>Acerca de mi</h2>
                <div className='about-content'>
                    <div className='column left'>
                     <Rive src={about} alt='about' className='img'/>
                    </div>
                    <div className='column right'>
                        <div className='text'>Soy Jose Castro y soy <span><Typewriter onInit={(typewriter)=>{
                       typewriter
                       .typeString('Web Developer').pauseFor(1000).deleteAll().start()
                    }}options={{string:['Web Developer'], autoStart:true,loop: true}} /></span></div>
                        <p>Commodo et voluptate tempor enim dolor. Adipisicing velit adipisicing tempor voluptate eu. Culpa veniam non aliquip tempor sint adipisicing pariatur mollit. Quis ad magna in mollit aliquip dolor non. Duis laborum tempor eiusmod incididunt magna dolor aliqua sunt exercitation id excepteur sint ea.</p>
                        <a href='#'>Descarga Mi CV</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;