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

    const { user, login } = useUserContext();

    const { nick, handleChange } = useForm<FormData>({
        nick: 'mamá',
    });

    const navigate = useNavigate();

    const sendUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        <Link to={`/loading/${user}`} />
        navigate(`/loading/${user}`, { state: { user: user } });
    }

    return (
        <div className="card row">
            <div className="col">
                <h2><i>Un día especial ha llegado!</i></h2>
                <h3>Ingresa el nombre de tu mamá para empezar</h3>
                <div className="container row">
                    <form autoComplete="off"
                        className="form align-items-center"
                        onSubmit={sendUser}>
                        <input type="text"
                            className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-7 col-xxl-7"
                            name="nick"
                            placeholder="Nombre"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            onClick={() => login(nick)}
                            className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-3 col-xxl-3'
                        >
                            <h4 style={{
                                marginBottom: '0px',
                            }}>
                                <i><b className='badge text-wrap text-break'
                                    style={{
                                        color: 'black',
                                    }}
                                >Siguiente</b></i>
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
                <div className="form-themes col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <Themes />
                </div>
            </div>
        </div>
    );
}