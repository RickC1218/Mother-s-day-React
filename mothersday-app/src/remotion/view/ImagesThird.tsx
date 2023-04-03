import styled from 'styled-components';
import image3 from '../assets/image3-video.png';
import image6 from '../assets/image6-video.png';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';


const Cont = styled.div`
    margin-left: 0px;
    margin-top: 0px;
`;

export const ImagesThird: React.FC = () => {

    
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <>
        <Cont>
            <div>
                <img src={image3} alt="image3" 
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
            <img src={image6} alt="image6" 
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