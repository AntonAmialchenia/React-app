import React, { FC, FormEvent, useContext } from "react";
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import { AuthContext } from "../context";

export const Login: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
