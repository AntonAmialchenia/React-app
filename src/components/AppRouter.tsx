import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { LayoutApp } from "../layout/LayoutApp";
import { AuthContext } from "../context";
import { Loader } from "./UI/Loader/Loader";

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
};
