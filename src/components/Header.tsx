import logo from '../Logo-project.png';
import './styles/header.css';
import React from 'react';

export const Header = () => {
    return (
        <header>
            <div className='row'>
                <div>
                    <img src={logo} alt="Logo Día de la Madre" className='col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1' />
                </div>
                <div className="nameHeader">
                    <h1 className='col-12'>FELÍZ DÍA, MAMÁ!</h1>
                </div>
            </div>
        </header>
    );
}