import './styles/form.css';

import React from 'react';

import { TiChevronRightOutline } from "react-icons/ti";
import { Themes } from "./Themes";
import { useForm } from "./Hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
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
        nick: 'mamá',
    });

    const navigate = useNavigate();

    const sendUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        <Link to={`/loading/${user}`} />
        navigate(`/loading/${user}`,{state: {user: user}});
    }

    return (
        <div className="card">
            <h2><i>Un día especial ha llegado!</i></h2>
            <h3>Ingresa el nombre de tu mamá para empezar</h3>
            <div className="container">
                <form autoComplete="off" 
                    className="form row align-items-center"
                    onSubmit={sendUser}>
                    <input type="text" 
                        className="form-control" 
                        name="nick"
                        placeholder="Nombre"
                        onChange={handleChange}
                    />
                    <button 
                        type="submit"                         
                        onClick={() => login(nick)}
                        >
                        <h4 style={{
                            marginBottom: '0px',
                        }}>
                            <i><b>Siguiente   </b></i>
                            <TiChevronRightOutline />
                        </h4>
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