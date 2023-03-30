import './styles/form.css';

import React from 'react';

import { TiChevronRightOutline } from "react-icons/ti";
import { Themes } from "./Themes";
import { useForm } from "./Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./Providers/UserProvider";

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';

interface FormData {
    nick: string;
}

export const Form = () => {

    const {user, login} = useUserContext();

    const {nick, handleChange} = useForm<FormData>({
        nick: '',
    });

    const navigate = useNavigate();

    const sendUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        navigate('/loading');
    }

    return (
        <div className="card">
            <h2>Tu año codificando en resumen:</h2>
            <h3>Ingresa tu nombre para empezar</h3>
            <div className="container">
                <form autoComplete="off" 
                    className="form row align-items-center"
                    onSubmit={sendUser}>
                    <input type="text" 
                        className="form-control" 
                        name="nick"
                        value={nick}
                        placeholder="Tu nombre"
                        onChange={handleChange}
                    />
                    <button 
                        type="submit" 
                        className="px-5" 
                        onClick={() => login(nick)}
                        >
                        <h2>
                            <TiChevronRightOutline/>
                        </h2>
                    </button>
                </form>
            </div>
            <div className="banner">
                <section>
                    <img src={img1} alt="imagen 1" />
                    <img src={img2} alt="imagen 2" />
                    <img src={img3} alt="imagen 3" />
                </section>
            </div>
            <div className="form-themes">
                <Themes />
            </div>
        </div>
    );
}