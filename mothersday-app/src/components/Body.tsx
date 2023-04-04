import { Form } from "./Form";
import { Loading } from "./Loading";
import { Video } from "./Video";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useUserContext } from "./Providers/UserProvider";

export const Body = () =>{
    const {user, login} = useUserContext();

    return (
        <>
        <Routes>
            <Route path='/loading/:user?' element={<Loading />} />
            <Route path='/video/:user?' element={<Video />} />
            <Route path='/' element={<Form />} />
        </Routes>
        </>
    );
}