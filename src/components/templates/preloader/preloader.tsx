import React, {FC} from "react";
import styles from "./preloader.module.scss";

const Preloader: FC = () => {
    return (
        <p className={styles.wrapper}>
            ....Загрузка....
        </p>
    );
};

export default Preloader;