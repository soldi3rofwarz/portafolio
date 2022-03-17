import React,{useRef} from 'react';
import './styleContact.css'
import Rive from 'rive-react';
import emailjs from '@emailjs/browser';


import movrow from './.././../assets/movrow.riv'
import user from './.././../assets/user.riv'
import mapa from './.././../assets/mapa.riv'
import mail from './.././../assets/mail.riv'

const Contact = () => {
    const form = useRef();

    function SendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_3orrzun','template_2p9cdgi',form.current,'Ym5vUWUB0S0rVr9EV')
        .then(r=>console.log(r))
        .catch(err=>console.log(err))
    }
    return ( 
        <section className='contact' id='contact'>
            <div className='max-width'>
                <h2 className='title'>Contactame</h2>
                <div className='contact-content'>
                    <div className='column left'>
                        <div className='text'>Conoceme</div>
                       
                            
                     
                        <div className='icons'>
                            <div className='row'>
                                <Rive src={user} animations="idlePreview" className='i'/>
                                <div className='info'>
                                    <div className='head'>Nombre</div>
                                    <div className='subTitle'>Jose Castro</div>
                                </div>
                            </div>
                            <div className='row'>
                                <Rive src={mapa} className='i'/>
                                <div className='info'>
                                    <div className='head'>Ubicacion</div>
                                    <div className='subTitle'>Chontales, Nicaragua</div>
                                </div>
                            </div>

                            <div className='row'>
                                <Rive src={mail} className='i'/>
                                <div className='info'>
                                    <div className='head'>Email</div>
                                    <div className='subTitle'>josejehovanicastroperez@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <Rive src={movrow} className='movrow'/>
                    </div>
                    <div className='column right'>
                        <div className='text'>Comunicate con migo</div>
                        <form ref={form} onSubmit={SendEmail}>
                            <div className='fields'>
                                <div className='field name'>
                                    <input type='text' name='name' placeholder='Nombre'required/>
                                </div>
                                <div className='field email'>
                                    <input type='email' name='email' placeholder='Email'required/>
                                </div>
                            </div>
                            <div className='field '>
                                    <input type='text' name='subject' placeholder='Motivo'required/>
                                </div>
                                <div className='field textarea'>
                                    <textarea cols='30' name='message' rows='10' placeholder='describe el motivo'required></textarea>
                                </div>
                                <div className='button'>
                                    <button type='submit'>Enviar mansajes</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;