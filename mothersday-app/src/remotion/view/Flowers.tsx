import { useMemo } from "react";
import { AbsoluteFill, random } from "remotion";
import { RainFlowers } from "./RainFlowers";


export const Flowers: React.FC = () => {
    const flowers = useMemo(() => {
        return new Array(1000).fill(true).map((_, i) => {
            const x = random("x" + i) * 100 + "%";
            const delay = random("delay" + i) * 100;
            let size = random("size" + i) + 0.4;
            if (size < 0.4) {
                size = 0.4;
            } else if (size > 0.8){ 
                size = 0.8;
            }
            return { x, delay, size };
        });
    }, []);

    return (
        <AbsoluteFill>
            {flowers.map((f) => {
                return <RainFlowers x = {f.x} delay = {f.delay} size = {f.size} />;
            })}
        </AbsoluteFill>
    );
};