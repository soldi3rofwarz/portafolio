import React from 'react';
import './styleSkills.css'

const Skills = () => {
    return ( 
    <section className='skills' id='skills'>
        <div className='max-width'>
            <h2 className='title'>My skills</h2>
            <div className='skills-content'>
                <div className='column left'>
                    <div className='text'>Mis habilidades y logros</div>
                    <p><strong>Las habilidades que e adquirido con el tiempo: </strong></p>
                    <p>Facilidad para trabajar en equipo</p>
                    <p>Buena capacidad para adaptarse a los cambios</p>
                    <p>capacidad de aprendizaje ascelerado</p>
                    <p><strong>Mis logros: </strong></p>
                    <p>Campeon del hackaton Nicaragia 2021</p>
                    <p>Multiples certificados en Platzi y Udemuy</p>
                </div>
                <div className='column right'>
                    <div className='bars'>
                        <div className='info'>
                            <span>HTML</span>
                           
                        </div>
                        <div className='line html'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>CSS</span>
                            
                        </div>
                        <div className='line css'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>javaScript</span>
                            
                        </div>
                        <div className='line js'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>Photoshop</span>
                            
                        </div>
                        <div className='line ps'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>Git</span>
                            
                        </div>
                        <div className='line git'></div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    );
}
 
export default Skills;