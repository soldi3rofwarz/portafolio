import React from 'react';
import './styleHeader.css'
 const Header = () => {
     return (  
         <nav className='navbar'>
             <div className='max-width'>
                <div className='logo'><a href='#'>Portafo<span>lio.</span></a></div>
                <ul className='menu'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Certifies</a></li>
                    <li><a href='#'>skills</a></li>
                    <li><a href='#'>projects</a></li>
                    <li><a href='#'>contact</a></li>
                </ul>
             </div>
         </nav>
     );
 }
  
 export default Header;