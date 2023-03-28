import React, { FC, Dispatch, SetStateAction } from "react";

import style from "./MyModal.module.css";

interface MyModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [style.myModal];
  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={style.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
