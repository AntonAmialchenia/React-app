import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/UI/NavBar/NavBar";

export const LayoutApp: FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
