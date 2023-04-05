import React, { useEffect } from 'react';
import gif from '../assets/gif-project.gif';
import './styles/loading.css';

import { Themes } from './Themes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from './Providers/UserProvider';

export const Loading = () => {

    const {user, login} = useUserContext();

    const navigate = useNavigate();

    const location = useLocation();
    let arrayLocation = location.pathname.split('/')
    if(arrayLocation.length == 2){
        arrayLocation[2] = 'mamá';
        arrayLocation[2] = arrayLocation[2].replace(/%C3%A1/g, "á");
    } else {
        arrayLocation[2] = arrayLocation[2].replace(/%20/g, " ");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%A1/g, "á");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%A9/g, "é");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%AD/g, "í");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%B3/g, "ó");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%BA/g, "ú");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%81/g, "Á");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%89/g, "É");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%8D/g, "Í");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%93/g, "Ó");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%9A/g, "Ú");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%91/g, "Ñ");
        arrayLocation[2] = arrayLocation[2].replace(/%C3%B1/g, "ñ");
        
        if(arrayLocation[2] == '' || arrayLocation[2] == null){
            arrayLocation[2] = 'mamá';
        }
    }
    login(arrayLocation[2]);


    useEffect(() => {
        const timer = setTimeout(() => {
            <Link to={`/video/${user}`} />
            navigate(`/video/${user}`,{state: {user: user}});
        }, 3000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="card-loading row">
            <div className="col">
                <div className='container-loading col-12'>
                    <h2>Cargando...</h2>
                    <br />
                    <img src={gif} alt="loading..." />
                    <h4><i>Alistando el video para {user}</i></h4>
                </div>
            </div>
        </div>    
    );
}
