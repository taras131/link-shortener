import React from 'react';
import Button from "../../atoms/button/button";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {toggleShowLinkModal} from "../../../store/link";
import styles from "./main.module.scss"
import TableLinks from "../../organism/table-links/table-links";
import {getErrorMessage} from "../../../store/link/selector";
import ErrorMessage from "../../organism/error-message/error-message";

const Main = () => {
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
                    <div className={styles.title_container}>
                        <p className={styles.title}>Краткость</p>
                        <p className={styles.subtitle}>-cестра таланта</p>
                    </div>
                    <Button text={"Укоротить"} isDisable={false} handleClick={handleCreateLinkClick}/>
                </section>
                <TableLinks/>
            </div>
        </main>
    );
};

export default Main;