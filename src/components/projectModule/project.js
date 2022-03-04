import React from 'react';
import './styleProjects.css'
import css from './../../assets/css.png'
import pacientes from './../../assets/pacientes.png'
import sinister from './../../assets/sinister.png'
import vagachontal from './../../assets/vagachontal.png'

const ProjectModule = () => {
    return ( 
    <section className='project' id='project'>
    <div className='max-width'>
        <h2 className='title'>Proyectos</h2>
        <div className='project-content'>
            <div className='card'>
            <a href='https://gallant-easley-e13171.netlify.app/' target='_blank'>
                <div className='box'>
                    <img src={css}/>
                </div>
                <div className='textcard'> Proyectos de css</div>
            </a>
            </div>
            <div className='card'>
                <a href='https://unruffled-mclean-790c0a.netlify.app/' target='_blank'>
                    <div className='box'>
                        <img src={pacientes}/>
                    </div>
                    <div className='textcard'>Agendar citas de mascotas</div>
                </a>
            </div>
            <div className='card'>
                <a href='https://hoting-hack.web.app/' target='_blank'>
                    <div className='box'>
                        <img src={sinister}/>
                    </div>
                    <div className='textcard'>Blog de Leyendas Nicaragüenses</div>
                </a>
            </div>
            <div className='card'>
                <a href='https://pfinal-f8f04.web.app/' target='_blank'>
                    <div className='box'>
                        <img src={vagachontal}/>
                    </div>
                    <div className='textcard'>Pagina de actividades turisticas</div>
                </a>
            </div>
            
        </div>
    </div>
</section> 
);
}
 
export default ProjectModule;