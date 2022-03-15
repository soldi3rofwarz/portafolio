import React from 'react';
import './styleSkills.css'

const Skills = () => {
    return ( 
    <section className='skills' id='skills'>
        <div className='max-width'>
            <h2 className='title'>My skills</h2>
            <div className='skills-content'>
                <div className='column left'>
                    <div className='text'>My creative skills & experiences</div>
                    <p>Labore dolore sit incididunt reprehenderit sit ex Lorem amet sunt. Elit qui et minim elit laboris minim non labore dolor ea incididunt deserunt. Nostrud anim veniam labore tempor aute. Sunt laboris esse occaecat sunt Lorem pariatur.</p>
                   
                </div>
                <div className='column right'>
                    <div className='bars'>
                        <div className='info'>
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className='line html'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>CSS</span>
                            <span>90%</span>
                        </div>
                        <div className='line css'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>javaScript</span>
                            <span>70%</span>
                        </div>
                        <div className='line js'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>Photoshop</span>
                            <span>90%</span>
                        </div>
                        <div className='line ps'></div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    );
}
 
export default Skills;