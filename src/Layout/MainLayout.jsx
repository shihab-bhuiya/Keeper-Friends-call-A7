import React from 'react';
import NavBar from '../SharedNav/NavBar';
import { Outlet } from 'react-router';
import Footer from '../SharedNav/Footer';

const MainLayout = () => {
  return (
    <div>
      
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;