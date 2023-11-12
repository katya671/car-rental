import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import css from "./SharedLayout.module.css";

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
