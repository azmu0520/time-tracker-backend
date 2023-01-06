import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import HomePage from '../pages/Home';
import { data } from '../utilits/navbar';

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
      </Route>

      <Route path={'*'} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
