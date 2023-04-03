import { AbsoluteFill, Audio, interpolate, Sequence, useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import { Flowers } from './Flowers';
import { ImagesFirst } from './ImagesFirst';
import { ImagesSecond } from './ImagesSecond';
import { ImagesThird } from './ImagesThird';

import audio from "../assets/song.mp3";


import { useUserContext } from "../../components/Providers/UserProvider";

const Title = styled.div`
	width: 100%;
    padding: 0 50px;
    color: black;
    font-size: 75px;
    text-align: right;
    margin-top: 40px;
    text-transform: uppercase;
`;
const Subtitle = styled.div`
    width: 100%;
    padding: 0;
    color: black;
    font-size: 75px;
    text-align: center;
    margin: auto;
    text-transform: uppercase;
`;

const Phrase1 = styled.div`
    width: 90%;
    padding: 0;
    color: black;
    font-size: 45px;
    text-align: center;
    margin-top: 60%;
	margin-left: 0%;
    rotate: 20deg;
`;
const Phrase2 = styled.div`
    width: 90%;
    padding: 0;
    color: black;
    font-size: 45px;
    text-align: center;
    margin: auto;
`;

export const View: React.FC = () => {
	const {user} = useUserContext();

	const frame = useCurrentFrame();
	
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 60,
				color: 'white',
				fontFamily: 'Comic Sans MS, Comic Sans, cursive',
				background: 'var(--background-theme-second)',
				textShadow: '0px 5px 12px black',
				width: '100%',
				height: '100%',
				display: 'flex',
			}}
		>
			<AbsoluteFill  className='firstView'>
                <Sequence from={0}>
                    <Flowers />
                    <Audio src={audio} startFrom={0} volume={0.5}/>
                </Sequence>
				<Sequence from={40} durationInFrames={121}>
					<ImagesFirst />
				</Sequence>
                <Sequence from={40} durationInFrames={121}>
					<ImagesFirst />
				</Sequence>
                <Sequence from={15} durationInFrames={146}>
					<Title
						style = {{
							opacity: interpolate(frame, [0, 60], [0, 1])
							}}
					> 
						FELÍZ DÍA, MAMÁ!
					</Title>
                </Sequence>
				<Sequence from={15} durationInFrames={146}>
					<Phrase1 
					style = {{
						opacity: interpolate(frame, [15, 100], [0, 1])
						}}>
						Gracias {user} por tu amor, paciencia, comprensión y sacrificio diario.
					</Phrase1>
                </Sequence>
			</AbsoluteFill>

            <AbsoluteFill className='secondView'>
                <Sequence from={161} durationInFrames={160}>	
                    <ImagesSecond />
                </Sequence>
                <Sequence from={161} durationInFrames={160}>
                    <Phrase2
                        style = {{
                            opacity: interpolate(frame, [165, 200], [0, 1])
                            }}
                    >
                        <i style = {{
                            textTransform: 'uppercase',
                        }}>{user}</i>
                        <br />
                        Mil flores hoy para ti mujer, por ser madre, por dar vida y por entregar tanto amor.
                    </Phrase2>
                </Sequence>
            </AbsoluteFill>

            <AbsoluteFill className='thirdView'>
                <Sequence from={322}>	
                    <ImagesThird />
                </Sequence>
				<Sequence from={322}>
					<Subtitle
                        style = {{
                            opacity: interpolate(frame, [330, 390], [0, 1]),
                        }}
                    >
                        GRACIAS {user} POR ESTAR SIEMPRE PRESENTE!
                    </Subtitle>
                </Sequence>
            </AbsoluteFill>
        </AbsoluteFill>
	);
}