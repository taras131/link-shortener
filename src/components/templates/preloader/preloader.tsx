import React from 'react';
import styles from "./preloader.module.scss";

const Preloader = () => {
    return (
        <p className={styles.wrapper}>
            ....Загрузка....
        </p>
    );
};

export default Preloader;