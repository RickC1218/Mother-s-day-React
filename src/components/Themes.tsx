import './styles/themes.css';

import React, { useEffect } from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import { useThemeContext } from "./Providers/ThemeProvider";

export const Themes = () => {
    const {theme, changeTheme} = useThemeContext();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (        
        <div className="container-themes">
            <h5><i>Elige un tema:</i></h5>
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