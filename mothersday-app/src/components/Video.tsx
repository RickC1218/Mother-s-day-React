import React, { useCallback, useRef } from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsLink45Deg, BsFillPlayFill } from 'react-icons/bs';
import { useUserContext } from './Providers/UserProvider';

import './styles/video.css';

import { Player, PlayerRef } from '@remotion/player';
import { Themes } from './Themes';
import { View } from '../remotion/view/View';

export const Video:React.FC = () => {
    const {user} = useUserContext();

    const playerRef = useRef<PlayerRef>(null);

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
                    <h2><i>Tu video está listo {user}</i></h2>
                    <br />
                    <h4>Descargue el video</h4>
                    <button type="submit" name="download" className="download">
                        <h4>DESCARGAR</h4>
                    </button>
                    <br />
                    <br />
                    <h4>Comparte el video:</h4>
                    <div className="container-share">
                        <button type="button" name="social" className="facebook">
                            <h2>
                                <BsFacebook />
                            </h2>
                        </button>
                        <button type="button" name="social" className="twitter">
                            <h2>
                                <BsTwitter />
                            </h2>
                        </button>
                        <button type="button" name="social" className="linkedin">
                            <h2>
                                <BsLinkedin />
                            </h2>
                        </button>
                        <button type="button" name="social" className="link">
                            <h2>
                                <BsLink45Deg />
                            </h2>
                        </button>
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
                            <h2>
                                <BsFillPlayFill />
                            </h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}