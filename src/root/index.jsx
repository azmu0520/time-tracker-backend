import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
// import Register from '../components/Register';
import HomePage from '../pages/Home';
import { data } from '../utilits/navbar';
export const ThemeContext = React.createContext();
const Root = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme'));
  useEffect(() => {
    // Get stored theme
    const storedTheme = localStorage.getItem('theme');

    // Set stored theme
    storedTheme && setMode(storedTheme);
  }, []);
  useEffect(() => {
    // Set theme in localStorage
    localStorage.setItem('theme', mode);
  }, [mode]);
  let theme = {
    dark: {
      bg: '#2c2c2c',
      secodry__bg: '#202020',
      text: 'rgba(255,255,255,.80)',
      signInBg: '#393939',
      border__color: 'transparent',
    },
    light: {
      bg: '#fff',
      secodry__bg: '#E4E8F0',
      text: '#99A1AB',
      primary__text: '#4a4a4a',
      secodry__text: 'rgb(117, 117, 117)',
      signInBg: '#fff',
      border__color: '#e4e8f0',
    },
  };
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme[mode]}>
        <Routes>
          <Route element={<Navbar />}>
            {data?.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            <Route path='/' element={<HomePage />} />
          </Route>
          <Route path={'*'} element={<div>you are lost</div>} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Root;
