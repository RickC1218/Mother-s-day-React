import { useEffect, useState } from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import './styles/themes.css';

type Theme = 'yellow' | 'red' | 'blue';

export const Themes = () => {
    const [theme, setTheme] = useState<Theme>('yellow')    

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
    }

    return (
        <div className="container-themes">
            <button type="button" name="options" className="theme-y" onClick={() => changeTheme('yellow')}>
                <h2>
                    <BsFillDiamondFill/>
                </h2>
            </button>
            <button type="button" name="options" className="theme-r" onClick={() => changeTheme('red')}>
                <h2>
                    <BsFillDiamondFill/>
                </h2>
            </button>
            <button type="button" name="options" className="theme-b" onClick={() => changeTheme('blue')}>
                <h2>
                    <BsFillDiamondFill/>
                </h2>
            </button>
        </div>
    );
}