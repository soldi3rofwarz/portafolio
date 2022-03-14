import React from 'react';
import './styleFooter.css'

const Footer = () => {

    
    return ( 
        <footer>
            <span>Creado por <a href='#'>Jose castro</a>| <span>&copy;</span>
                {(new Date().getFullYear())}
            </span>
        </footer>
    );
}
 
export default Footer;