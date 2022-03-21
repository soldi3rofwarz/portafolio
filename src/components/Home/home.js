import React from 'react';
import './styleHome.css'
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect';
import {useTranslation} from 'react-i18next'
const Home = () => {
    const [t]= useTranslation("home")
    return ( 
        <React.Fragment>
        <section className='home' id='home'>
            <div className='max-width'>
                <div className='home-content'>
                    <div className='text1'> {t("home.text1")}</div>
                    <div className='text2'> Jose Castro</div>
                    <div className='text3'> Y soy Ing. en 
                    <span><Typewriter onInit={(typewriter)=>{
                       typewriter
                       .typeString('Sistemas').pauseFor(1000).deleteAll().start()
                    }}options={{string:['Sistemas'], autoStart:true,loop: true}} /></span>
                    
                    </div>
                    <Link className='a' to='contact'smooth={true} duration={1000}>Contratame</Link>
                </div>
            </div>
        </section>
        </React.Fragment>
        

    ); 
}
 
export default Home;