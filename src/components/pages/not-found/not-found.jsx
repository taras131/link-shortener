import React, {FC} from "react";
import styles from "./not-found.module.scss";

const NotFound: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2>404 page</h2>
            <p>Страница не найдена</p>
        </div>
    );
}

export default NotFound;
