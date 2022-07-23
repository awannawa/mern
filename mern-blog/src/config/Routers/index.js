import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, Home } from '../../pages';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default Routers;