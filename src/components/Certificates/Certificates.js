import React from 'react';
import './styleCertificates.css'
import Slider from "react-slick";
import Nextrows from './rows/rows';
import {useTranslation} from 'react-i18next'


import frontEnd from './../../assets/certificates/frontEnd.jpg'
import git from './../../assets/certificates/git.jpg'
import react from './../../assets/certificates/react.jpg'
import algoritmos from './../../assets/certificates/algoritmos.jpg'
import htmlCss from './../../assets/certificates/htmlCss.jpg'
import introduccionReact from './../../assets/certificates/introduccionReact.jpg'
import pastexperiences from './../../assets/certificates/pastexperiences.jpg'
import Pronunciacion from './../../assets/certificates/Pronunciacion.jpg'
import question from './../../assets/certificates/question.jpg'
import scope from './../../assets/certificates/scope.jpg'


const Certificates = () => {
  const {t}= useTranslation("certificates")

    const images=[frontEnd,git,react,algoritmos,htmlCss,introduccionReact,pastexperiences,Pronunciacion,question,scope]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        appendDots: dots => (
          
          <div
            style={{
              padding: "10px"
            }}
          >
            <ul style={{ margin: "10px" }}> {dots} </ul>
          </div>
          
          
        ),
        customPaging: i => (
          <div className='dots'
            style={{ 
              width: "30px",
              
            }}
          >
            {'.'}
          </div>
        ),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 947,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 690,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    };
      

    return ( 
        <section className='certificates' id='certificates'>
            <div className='max-width'>
                <h2 className='title'>{t("certificates.title")}</h2>
                <div className='slider'>
                <Slider {...settings}>
                         
                           {images.map((image, index)=>(
                               <div key={index} className='slide'> 
                                    <img src={image}/>
                               </div>
                           ))}
                        
                   
                </Slider>
                </div>
            </div>
        </section>
    );
}
 
export default Certificates;