import React, { useEffect, useRef, useState } from 'react';
import gif from '../assets/gif-project.gif';
import './styles/loading.css';

import { Themes } from './Themes';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './Providers/UserProvider';

type TimerArgs = {
    milisegundos: number
}
type Props = {
    theme: string;
    nickname: string;
}

export const Loading = () => {

    const {user, login} = useUserContext();

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/video');
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="card-loading">
            <div className="loading-themes">
                <Themes />
            </div>
            <div className="container-loading">
                <img src={gif} alt="loading..." />
                <h2>Cargando...</h2>
                <h5>Danos unos minutos {user}...</h5>
            </div>
        </div>
    );
}
