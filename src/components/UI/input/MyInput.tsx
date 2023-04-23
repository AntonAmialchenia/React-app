import React, { ChangeEvent } from "react";
import style from "./MyInput.module.css";

type MyInputProps = {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MyInput: React.FC<MyInputProps> = ({ ...props }) => {
  return <input className={style.myInput} {...props} />;
};

export default MyInput;
