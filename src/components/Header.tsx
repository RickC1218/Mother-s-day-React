import logo from '../Logo-project.png';
import './styles/header.css';
import React from 'react';

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo Día de la Madre" />
            <h1>FELÍZ DÍA, MAMÁ!</h1>
        </header>
    );
}