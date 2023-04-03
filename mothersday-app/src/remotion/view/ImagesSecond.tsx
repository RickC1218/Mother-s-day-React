import styled from 'styled-components';
import image1 from '../assets/image1-video.png';
import image5 from '../assets/image5-video.png';
import gif2 from '../assets/corazon.gif';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';


const Cont = styled.div`
    margin-left: 0px;
    margin-top: 0px;
`;

export const ImagesSecond: React.FC = () => {

    
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <>
        <Cont>
            <div>
                <img src={image1} alt="imagen1" 
                    style = {{
                        position: 'absolute',
                        width: '45%',
                        height: '45%',
                        transform: `translateX(${interpolate(
                            frame - 20,
                            [0, 20], 
                            [-700, 0], 
                            {
                                extrapolateRight: 'clamp',
                                extrapolateLeft: 'clamp'
                            }
                        )}px)`
                    }}
                />
            </div>
            <div>
                <img src={image5} alt="image5" 
                    style = {{
                        position: 'absolute',
                        width: '40%',
                        height: '40%',
                        marginLeft: '63%',
                        marginTop: '35px',
                        transform: `translateX(${interpolate(
                            frame - 20,
                            [0, 20], 
                            [700, 0], 
                            {
                                extrapolateRight: 'clamp',
                                extrapolateLeft: 'clamp'
                            }
                        )}px)`
                    }}
                />
            </div>
            <img src={gif2} alt="gif2" 
                style = {{
                    transform: `scale(${spring({ fps, frame: frame - 40 })})`,
                    position: 'absolute',
                    width: '40%',
                    height: '40%',
                    marginLeft: '32.5%',
                    marginTop: '60%',
                }}
            />
        </Cont>
        </>
    );
};