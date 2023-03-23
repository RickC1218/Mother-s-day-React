import React, { useEffect, useRef, useState } from 'react';
import gif from '../assets/gif-project.gif';
import './styles/loading.css';

import { Themes } from './Themes';
import { useNavigate } from 'react-router-dom';
import { render } from 'react-dom';

type TimerArgs = {
    milisegundos: number
}

export const Loading = ( {milisegundos}: TimerArgs ) => {

    const navigate = useNavigate();

    const [segundos, setSegundos] = useState(10);
    const ref  = useRef<NodeJS.Timeout>();

    const timer = () => {
        if (segundos === 0) {
            navigate('/video/${nickname}')
        }
    }	
    useEffect( () => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval( () => setSegundos( s => s - 1) , milisegundos );
    }, [milisegundos])

    return (
        <div className="card-loading">
            <div className="loading-themes">
                <Themes />
            </div>
            <div className="container-loading">
                <img src={gif} alt="loading..." />
                <h2>Cargando...</h2>
            </div>
            <div>
                <h4>
                    Tiempo de espera (s): <small>{ segundos }</small> 
                </h4>
            </div>
        </div>
    );
}
