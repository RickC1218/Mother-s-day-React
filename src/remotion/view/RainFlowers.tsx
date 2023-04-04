import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import flower1 from "../assets/image-flower1-video.png";
import flower2 from "../assets/image-flower2-video.png";
import flower3 from "../assets/image-flower3-video.png";

export const RainFlowers: React.FC<{
        x: string;
        delay: number;
        size: number;
    }> = ({x, delay, size}) => {

    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const flower = spring({
        fps: fps * 8,
        frame: frame - delay * 15,
        config:
        {
            damping: 1000,
        },
    });

    const top = interpolate(flower, [0, 0.8], [-0.2, 1.1]);

    return (
        <div
            style={{
                width: 100,
                position: 'absolute',
                left: x,
                top: top * 150 + "%",
                transform: `scale(${size})`,
            }}>
                <img src={flower1} alt="/flower1" 
                    style={{
                        width: 100,
                        transform: `rotate(${flower * (-520)}deg)`
                    }}
                />
                <img src={flower2} alt="/flower2"
                    style={{
                        width: 100,
                        transform: `rotate(${flower * 520}deg)`
                    }} 
                />
                <img src={flower3} alt="/flower3"
                    style={{
                        width: 125,
                        transform: `rotate(${flower * 520}deg)`
                    }} 
                />
            </div>
    );
};