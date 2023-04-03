import styled from 'styled-components';
import image2 from '../assets/image2-video.png';
import gif1 from '../assets/gif1-video.gif';
import gif2 from '../assets/corazon.gif';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';


const Cont = styled.div`
    margin-left: 0;
    margin-top: 0;
`;

export const ImagesFirst: React.FC = () => {

    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();
    return (
        <>
        <Cont>
            <div>
                <img src={image2} alt="imagen2" 
                    style = {{
                        transform: `rotate( -30deg )`,
                        width: '60%',
                    }}
                />
            </div>
            <div>
                <img src={gif1} alt="gif1" 
                    style = {{
                        transform: `scale(${spring({ fps, frame: frame - 40 })})`,
                        position: 'absolute',
                        width: '50%',
                        height: '50%',
                        marginLeft: '50%',
                        marginTop: '-15%',
                    }}
                />
            </div>
            <img src={gif2} alt="gif2" 
                style = {{
                    transform: `scale(${spring({ fps, frame: frame - 35 })})`,
                    position: 'absolute',
                    width: '40%',
                    height: '40%',
                    marginTop: '35%',
                    marginLeft: '0%',
                }}
            />
        </Cont>
        </>
    );
};