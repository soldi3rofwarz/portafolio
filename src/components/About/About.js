import React from 'react';
import './styleAbout.css'
import Rive from 'rive-react'
import about from './../../assets/about.riv'
import Typewriter from 'typewriter-effect';
import Cv from './../../assets/cv.pdf'

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
                      <p>Me llamo Jose Jehovani Castro Perez, soy ingeniero en sistemas con enfoque al desarrollo Web
                          utilizando html-css y javaScript, ademas de el uso de react el cual e aprendido viendo tutoriales 
                          princincipalmente en ingles debido a que soy nivel intermedio en ese idioma. 
                          Aparte de el desarrollo web tengo las habilidades de edicion de fotos con <span>Photoshop</span> 
                          y edicion de videos con <span>Filmora</span>de los cuales llevo aprendiendo como hobbie aparte de 
                          inspirarme en creaciones de editores franceses pues estoy tambien aprendiendo ese idioma.
                      </p>
                      <a href={Cv} download='JoseCv.pdf'>Descarga Mi CV</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;