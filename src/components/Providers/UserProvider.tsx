import React, { createContext, useState, useContext } from "react";

interface Userprops { children: JSX.Element | JSX.Element[] }

export type UserContextProps = {
    user: string;
    login: (user: string) => void;
}

const userContext = createContext<UserContextProps>({} as UserContextProps);

//hook
export const useUserContext = () => useContext(userContext);


export function UserProvider({children}:Userprops) {

    const [user, setUser] = useState('mamá');

    const login = ( user: string ) => {
        setUser(user);
    }

    return (
        <userContext.Provider value={{
            user,
            login
        }}>
                {children}
        </userContext.Provider>
    );
}