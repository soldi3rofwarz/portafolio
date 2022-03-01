import React from 'react';
import './styleHome.css'
const Home = () => {
    return ( 
        <React.Fragment>
        <section className='home' id='home'>
            <div className='max-width'>
                <div className='home-content'>
                    <div className='text1'> Hola, mi nombre es</div>
                    <div className='text2'> Jose Castro</div>
                    <div className='text3'> Y soy Ing. en <span>Sistemas</span></div>
                    <a href='#'>Hire me</a>
                </div>
            </div>
        </section>
        </React.Fragment>
        

    ); 
}
 
export default Home;