import React, {FC} from "react";
import Button from "../../atoms/button/button";
import styles from "./error-message.module.scss";

interface IErrorMessage {
    errorMessage: string
}

const ErrorMessage: FC<IErrorMessage> = ({errorMessage}) => {
    const handleReloadClick = () => {
        window.location.reload();
    }
    return (
        <div className={styles.wrapper}>
            <h3>Произошла ошибка!</h3>
            <p>{errorMessage}</p>
            <p>Попробуте повторить попытку позднее.</p>
            <Button text={"TRY"} isDisable={false} handleClick={handleReloadClick}/>
        </div>
    );
};

export default ErrorMessage;