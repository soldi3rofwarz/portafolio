import React from 'react';
import './styleContact.css'
import Rive from 'rive-react';
import user from './.././../assets/user.riv'
import mapa from './.././../assets/mapa.riv'
import mail from './.././../assets/mail.riv'

const Contact = () => {
    return ( 
        <section className='contact' id='contact'>
            <div className='max-width'>
                <h2 className='title'>Contact me</h2>
                <div className='contact-content'>
                    <div className='column left'>
                        <div className='text'>Conoceme</div>
                        <p>Ipsum deserunt labore id ipsum anim incididunt enim veniam ad irure est. Anim sint magna ad laborum reprehenderit laboris officia minim sunt nisi. Occaecat occaecat laborum id et excepteur reprehenderit consequat ipsum id. Est in proident amet sunt nisi voluptate. Consectetur officia veniam aliqua sit magna ea aliquip officia nisi ut aute nisi.</p>
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
                    </div>
                    <div className='column right'>
                        <div className='text'>Mensajeame</div>
                        <form action='#'>
                            <div className='fields'>
                                <div className='field name'>
                                    <input type='text' placeholder='Nombre'required/>
                                </div>
                                <div className='field email'>
                                    <input type='email' placeholder='Email'required/>
                                </div>
                            </div>
                            <div className='field '>
                                    <input type='text' placeholder='Motivo'required/>
                                </div>
                                <div className='field textarea'>
                                    <textarea cols='30' rows='10' placeholder='describe el motivo'required></textarea>
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