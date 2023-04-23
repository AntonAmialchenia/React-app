import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext } from "./../../../context/index";

export const NavBar: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
