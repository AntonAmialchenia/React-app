import React, { ReactNode, MouseEvent, MouseEventHandler } from 'react';
import style from './MyButton.module.css'

type MyButtonProps = {
    children: ReactNode
    disabled?: boolean
    onClick?: (e:MouseEvent<HTMLButtonElement>) => void
}

const MyButton:React.FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <button onClick={(e) => props.onClick ? props.onClick(e): e}  {...props} className={style.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;