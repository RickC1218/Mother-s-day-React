import { Form } from "./Form";
import { Loading } from "./Loading";
import { Video } from "./Video";
import React from "react";
import { Route, Routes } from "react-router-dom";

export function Body() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/loading/:nickname" element={<Loading milisegundos={1000} />} />
            <Route path="/video/:nickname" element={<Video />} />
        </Routes>
        </>
    );
}