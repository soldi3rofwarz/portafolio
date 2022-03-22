import React from 'react';
import './styleHome.css'
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect';
import {useTranslation} from 'react-i18next'
const Home = () => {
    const {t}= useTranslation("home")
    return ( 
        <React.Fragment>
        <section className='home' id='home'>
            <div className='max-width'>
                <div className='home-content'>
                    <div className='text1'> {t("home.text1")}</div>
                    <div className='text2'>{t("home.text2")}</div>
                    <div className='text3'> {t("home.text3")} 
                    <span><Typewriter onInit={(typewriter)=>{
                       typewriter
                       .typeString(`${t("home.text4")}`).pauseFor(1000).deleteAll().start()
                    }}options={{string:[`${t("home.text4")}`], autoStart:true,loop: true}} /></span>
                    
                    </div>
                    <Link className='a' to='contact'smooth={true} duration={1000}>{t("home.button")}</Link>
                </div>
            </div>
        </section>
        </React.Fragment>
        

    ); 
}
 
export default Home;