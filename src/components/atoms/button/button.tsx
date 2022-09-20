import React, {FC} from "react";
import styles from "./button.module.scss";

interface IButton {
    text: string,
    isDisable: boolean,
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: FC<IButton> = ({text, handleClick, isDisable}) => {
    return (
        <button className={styles.button}
                onClick={handleClick}
                disabled={isDisable}>
            {text}
        </button>
    );
};

export default Button;