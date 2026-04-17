import React from 'react';
import NavBar from '../SharedNav/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <h2>main layout</h2>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;