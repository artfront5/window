import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from '../pages/Articles/Articles';
import Home from '../pages/Home/Home';




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}
