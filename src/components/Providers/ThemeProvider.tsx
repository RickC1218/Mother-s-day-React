import React, {createContext, useState, useContext} from "react";


export type Theme = 'yellow' | 'red' | 'blue';
interface props { children: JSX.Element | JSX.Element[] }


export type ThemeContextProps = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}
const themeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

//hook
export const useThemeContext = () => useContext(themeContext);


export function ThemeProvider({children}: props) {

    const [theme, setTheme] = useState<Theme>('red');

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
    }

    return (
        <themeContext.Provider value={{
            theme,
            changeTheme
        }}>
            {children}
        </themeContext.Provider>
    );
}