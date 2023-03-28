import React, { ReactNode, MouseEvent } from "react";
import style from "./MyButton.module.css";

type MyButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  styles?: React.CSSProperties;
};

const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={props.styles}
      onClick={(e) => (props.onClick ? props.onClick(e) : e)}
      {...props}
      className={style.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
