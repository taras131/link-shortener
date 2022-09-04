import React, {FC} from "react";
import TableLinks from "../../organism/table-links/table-links";
import Button from "../../atoms/button/button";
import ErrorMessage from "../../organism/error-message/error-message";
import styles from "./main.module.scss"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {toggleShowLinkModal} from "../../../store/link";
import {getErrorMessage} from "../../../store/link/selector";

const Main: FC = () => {
    const dispatch = useAppDispatch()
    const errorMessage = useAppSelector(state => getErrorMessage(state))
    const handleCreateLinkClick = () => {
        dispatch(toggleShowLinkModal())
    }
    if (errorMessage) return (<ErrorMessage errorMessage={errorMessage}/>)
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.header}>
                    <h1>Сервис по созданию коротких ссылок</h1>
                    <blockquote className={styles.title_container}>
                        <p className={styles.title}>Краткость</p>
                        <p className={styles.subtitle}>-cестра таланта</p>
                    </blockquote>
                    <Button text={"Укоротить"} isDisable={false} handleClick={handleCreateLinkClick}/>
                </section>
                <TableLinks/>
            </div>
        </main>
    );
};

export default Main;