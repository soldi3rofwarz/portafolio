import React from 'react';
import './stylerows.css'
import Rive from 'rive-react';
import row from './../../../assets/row.riv'

const Nextrows = (props) => {
    const { className, style, onClick } = props;
 
    return (  
        <Rive src={row} onClick={onClick} className='nextRow'/>

    );
}
 
export default Nextrows;