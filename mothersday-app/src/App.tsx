import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from './components/Providers/ThemeProvider';
import { UserProvider } from './components/Providers/UserProvider';

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <UserProvider>
          <BrowserRouter>
              <Body  />
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
