import React, { useCallback, useRef } from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsLink45Deg, BsPlayCircleFill, BsPinterest, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    TelegramShareButton,
} from "react-share";

import { useUserContext } from './Providers/UserProvider';

import './styles/video.css';

import { Player, PlayerRef } from '@remotion/player';
import { Themes } from './Themes';
import { View } from '../remotion/view/View';
import { useLocation } from 'react-router-dom';

export const Video:React.FC = () => {
    const {user, login} = useUserContext();

    const playerRef = useRef<PlayerRef>(null);
    
    const location = useLocation();
    var arrayLocation = location.pathname.split('/')
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

    const handleClick = useCallback(() => {
        const { current } = playerRef;
        if (!current) {
            return;
        }
        current.play();
        document.getElementsByName('play')[0].style.display = 'none';
    }, []);

    return (
        <div className="card-video">
            <div className="container-video row">
                <div className="col-4 info">
                    <div className="video-themes">
                        <Themes />
                    </div>
                    <br />
                    <br />
                    <h2><i>El video para {user} está listo!</i></h2>
                    <br />
                    <h4>Compártelo en redes sociales:</h4>
                    <div className="container-share">
                        <FacebookShareButton
                            url={window.location.href}
                            quote="¡Feliz día de las madres!"
                            hashtag="#FelizDíaDeLasMadres"
                        >
                            <button type="button" name="social" className="facebook">
                                <h2>
                                    <BsFacebook />
                                </h2>
                            </button>
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={window.location.href}
                            title="¡Feliz día de las madres!"
                            hashtags={["FelizDíaDeLasMadres"]}
                        >
                            <button type="button" name="social" className="twitter">
                                <h2>
                                    <BsTwitter />
                                </h2>
                            </button>
                        </TwitterShareButton>

                        <LinkedinShareButton
                            url={window.location.href}
                            title="¡Feliz día de las madres!"
                            summary="¡Feliz día de las madres!"
                        >
                            <button type="button" name="social" className="linkedin">
                                <h2>
                                    <BsLinkedin />
                                </h2>
                            </button>
                        </LinkedinShareButton>

                        <PinterestShareButton
                            url={window.location.href}
                            media="https://i.ibb.co/0nZ3Z3T/Logo.png"
                            description="¡Feliz día de las madres!"
                        >
                            <button type="button" name="social" className="pinterest">
                                <h2>
                                    <BsPinterest />
                                </h2>
                            </button>
                        </PinterestShareButton>

                        <TelegramShareButton
                            url={window.location.href}
                            title="¡Feliz día de las madres!"
                        >
                            <button type="button" name="social" className="telegram">
                                <h2>
                                    <BsTelegram />
                                </h2>
                            </button>
                        </TelegramShareButton>

                        <WhatsappShareButton
                            url={window.location.href}
                            title="¡Feliz día de las madres!"
                        >
                            <button type="button" name="social" className="whatsapp">
                                <h2>
                                    <BsWhatsapp />
                                </h2>
                            </button>
                        </WhatsappShareButton>


                    </div>
                </div>
                <div className='col-8 mp4'>
                    <div className='player'>
                        <Player
                            className='playerVideo'
                            component={ View }
                            fps={30}
                            durationInFrames={482}
                            compositionWidth={1080}
                            compositionHeight={1080}                            ref={playerRef}
                            loop
                            style={{ 
                                border: '3px solid #000',
                                borderRadius: '10px' ,
                                width: '90%',
                                justifyContent: 'center',
                                margin: '0 auto',
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}
                        />
                        <button type="button" name="play" className="playControler" onClick={handleClick} >
                            <h4 style={{
                                marginBottom: '0px',
                                padding: '10px',
                            }}>
                                <BsPlayCircleFill />
                                <i><b>Reproducir</b></i>
                            </h4>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}