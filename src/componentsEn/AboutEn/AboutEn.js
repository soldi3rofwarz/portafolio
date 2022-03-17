import React from 'react';
import './styleAboutEn.css'
import Rive from 'rive-react'
import about from './../../assets/about.riv'
import Typewriter from 'typewriter-effect';
import Cv from './../../assets/cv.pdf'

const AboutEn = () => {
    return ( 
        <section className='about' id='about'>
            <div className='max-width'>
                <h2 className='title'>About Me</h2>
                <div className='about-content'>
                    <div className='column left'>
                     <Rive src={about} alt='about' className='img'/>
                    </div>
                    <div className='column right'>
                        <div className='text'>Soy Jose Castro y soy <span><Typewriter onInit={(typewriter)=>{
                       typewriter
                       .typeString('Web Developer').pauseFor(1000).deleteAll().start()
                    }}options={{string:['Web Developer'], autoStart:true,loop: true}} /></span></div>
                      <p>My name is Jose Jehovani Castro Perez, I am a systems engineer with a focus on Web development.
                          using html-css and javaScript, in addition to the use of react which I learned by watching tutorials
                          mainly in English because I am intermediate level in that language.
                          Apart from web development I have photo editing skills with <span>Photoshop</span>
                          and video editing with <span>Filmora</span> from which I have been learning as a hobby apart from
                          inspire me in creations of French publishers because I am also learning that language.
                      </p>
                      <a href={Cv} download='JoseCv.pdf'>Donwload my CV</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutEn;