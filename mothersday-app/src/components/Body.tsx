import { Form } from "./Form";
import { Loading } from "./Loading";
import { Video } from "./Video";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const Body = () =>{
    return (
        <>
        <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/video' element={<Video />} />
        </Routes>
        </>
    );
}