import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
