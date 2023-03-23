/*import video from '../assets/video.mp4';*/
import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsLink45Deg, BsFillPlayFill } from 'react-icons/bs';
import './styles/video.css';
import { Themes } from './Themes';

export const Video = () => {
    return (
        <div className="card-video">
            <div className="container-video row">
                <div className="col-4 info">
                    <h2>Tu video está listo</h2>
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
                    <div className="video-themes">
                        <Themes />
                    </div>
                </div>
                <div className='col-8 mp4'>
                    <button type="button" name="play" className="play">
                        <h2>
                            <BsFillPlayFill />
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
}