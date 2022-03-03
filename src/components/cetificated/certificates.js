import React from 'react';
import './styleCertificates.css'
import frontEnd from './../../assets/frontEnd.jpg'
import git from './../../assets/git.jpg'
import react from './../../assets/react.jpg'

const Certificates = () => {
    return ( 
    <section className='certificates' id='certificates'>
    <div className='max-width'>
        <h2 className='title'>Certificados</h2>
        <div className='cert-content'>
            <div className='card'>
                <div className='box'>
                    <img src={frontEnd}/>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                <img src={git}/>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                <img src={react}/>
                </div>
            </div>
            
        </div>
    </div>
</section> 
);
}
 
export default Certificates;