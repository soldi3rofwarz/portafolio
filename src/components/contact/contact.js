import React,{useRef, useState} from 'react';
import './styleContact.css'
import Rive from 'rive-react';
import emailjs from '@emailjs/browser';
import {useTranslation} from 'react-i18next'
 

import movrow from './.././../assets/movrow.riv'
import user from './.././../assets/user.riv'
import mapa from './.././../assets/mapa.riv'
import mail from './.././../assets/mail.riv'

const Contact = () => {
const [submited,setsubmited]= useState(false)

    const {t}= useTranslation("contact")
    const form = useRef();

    function SendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_3orrzun','template_2p9cdgi',form.current,'Ym5vUWUB0S0rVr9EV')
        .then(r=>console.log(r))
        .catch(err=>console.log(err))
        e.target.reset()
        setsubmited(true)
    }
    return ( 
        <section className='contact' id='contact'>
            <div className='max-width'>
                <h2 className='title'>{t("contact.title")}</h2>
                <div className='contact-content'>
                    <div className='column left'>
                        <div className='text'>{t("contact.text")}</div>
                       
                            
                     
                        <div className='icons'>
                            <div className='row'>
                                <Rive src={user} animations="idlePreview" className='i'/>
                                <div className='info'>
                                    <div className='head'>{t("contact.name")}</div>
                                    <div className='subTitle'>Jose Castro</div>
                                </div>
                            </div>
                            <div className='row'>
                                <Rive src={mapa} className='i'/>
                                <div className='info'>
                                    <div className='head'>{t("contact.location")}</div>
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

                        <div className='text'>{t("contact.text2")}</div>
                        <form ref={form} onSubmit={SendEmail}>

                            <div className='fields'>
                                <div className='field name'>
                                    <input type='text' name='name' placeholder={t("contact.inputn")} required/>
                                </div>
                                <div className='field email'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </div>
                            </div>
                            <div className='field '>
                                    <input type='text' name='subject' placeholder={t("contact.inputs")} required/>
                                </div>
                                <div className='field textarea'>
                                    <textarea cols='30' name='message' rows='10' placeholder={t("contact.inputm")} required></textarea>
                                </div>
                                <div className='button'>
                                    <button type='submit'>{t("contact.submit")}</button>
                                </div>
                                <div className='alert'>{submited? <span>{t("contact.alert")}</span>:<span></span>}</div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;