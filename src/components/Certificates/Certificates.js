import React from 'react';
import './styleCertificates.css'
import frontEnd from './../../assets/frontEnd.jpg'
import git from './../../assets/git.jpg'
import react from './../../assets/react.jpg'


const Certificates = () => {
    return ( 
        <section className='certificates' id='certificates'>
            <div className='max-width'>
                <h2 className='title'>Mis certificados</h2>
                <div className='carousel'>
                    <div className='card'>
                        <div className='box'>
                            <img src={git}/>
                            <div className='text'>nombre</div>
                            <p>Adipisicing officia laboris eu dolore et esse tempor.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src={frontEnd}/>
                            <div className='text'>nombre</div>
                            <p>Adipisicing officia laboris eu dolore et esse tempor.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src={react}/>
                            <div className='text'>nombre</div>
                            <p>Adipisicing officia laboris eu dolore et esse tempor.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src={frontEnd}/>
                            <div className='text'>nombre</div>
                            <p>Adipisicing officia laboris eu dolore et esse tempor.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src={frontEnd}/>
                            <div className='text'>nombre</div>
                            <p>Adipisicing officia laboris eu dolore et esse tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Certificates;