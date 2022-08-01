import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from '../pages/Articles/Articles';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}
