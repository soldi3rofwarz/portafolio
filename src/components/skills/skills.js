import React from 'react';
import './styleSkills.css'
import {useTranslation} from 'react-i18next'


const Skills = () => {
    const {t}= useTranslation("skills")
    return ( 
    <section className='skills' id='skills'>
        <div className='max-width'>
            <h2 className='title'>{t("skills.title")}</h2>
            <div className='skills-content'>
                <div className='column left'>
                    <div className='text'>{t("skills.text")}</div>
                    <p><strong>{t("skills.p1")}</strong></p>
                    <p>{t("skills.p2")}</p>
                    <p>{t("skills.p3")}</p>
                    <p>{t("skills.p4")}</p>
                    <p><strong>{t("skills.p5")}</strong></p>
                    <p>{t("skills.p6")}</p>
                    <p>{t("skills.p7")}</p>
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