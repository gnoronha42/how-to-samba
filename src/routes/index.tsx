import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewMembersForm from '../pages/newMembers';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/new-members" element={<Home />} /> 
      <Route path="/" element={<NewMembersForm />} />
    </Routes>
  );
};

export default AppRoutes;