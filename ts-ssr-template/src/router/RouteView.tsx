import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

const RouteView: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default RouteView;