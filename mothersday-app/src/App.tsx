import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
