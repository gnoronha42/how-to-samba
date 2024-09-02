import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewMembersForm from '../pages/newMembers';
import Portfolio from '../pages/portfolio';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/new-members" element={<NewMembersForm />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default AppRoutes;