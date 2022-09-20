import React from "react";
import styles from "./empty-links-list.module.scss";

const EmptyLinksList = () => {
    return (
        <p className={styles.empty_links_wrapper}>У вас пока нет ссылок</p>
    );
};

export default EmptyLinksList;