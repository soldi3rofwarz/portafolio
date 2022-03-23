import React from 'react';
import './styleProjects.css'
import css from './../../assets/css.png'
import pacientes from './../../assets/pacientes.png'
import sinister from './../../assets/sinister.png'
import vagachontal from './../../assets/vagachontal.png'
import {useTranslation} from 'react-i18next'


const ProjectModule = () => {
    const {t}= useTranslation("project")
    return ( 
    <section className='project' id='project'>
    <div className='max-width'>
        <h2 className='title'>{t("project.title")}</h2>
        <div className='project-content'>
            <div className='card'>
            <a href='https://gallant-easley-e13171.netlify.app/' target='_blank'>
                <div className='box'>
                    <img src={css}/>
                </div>
                <div className='textcard'>{t("project.pr1")}</div>
            </a>
            </div>
            <div className='card'>
                <a href='https://unruffled-mclean-790c0a.netlify.app/' target='_blank'>
                    <div className='box'>
                        <img src={pacientes}/>
                    </div>
                    <div className='textcard'>{t("project.pr2")}</div>
                </a>
            </div>
            <div className='card'>
                <a href='https://hoting-hack.web.app/' target='_blank'>
                    <div className='box'>
                        <img src={sinister}/>
                    </div>
                    <div className='textcard'>{t("project.pr3")}</div>
                </a>
            </div>
            <div className='card'>
                <a href='https://pfinal-f8f04.web.app/' target='_blank'>
                    <div className='box'>
                        <img src={vagachontal}/>
                    </div>
                    <div className='textcard'>{t("project.pr4")}</div>
                </a>
            </div>
            
        </div>
    </div>
</section> 
);
}
 
export default ProjectModule;