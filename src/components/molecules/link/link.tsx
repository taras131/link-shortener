import React, {FC, useState} from "react";
import classNames from "classnames";
import styles from "./link.module.scss";
import {ILink} from "../../../models/i-link";
import {FETCH_REDIRECT_PATH} from "../../../config/constants";

interface ILinkComponent extends ILink {
    index: number,
    offset: number
}

const messageHelp = "Кликнете чтобы скопировать";
const messageSuccess = "Скопировано";

const Link: FC<ILinkComponent> = ({counter, short, target, index, offset}) => {
    const url = `${process.env.REACT_APP_API_URL + FETCH_REDIRECT_PATH}/${short}`;
    const [message, setMessage] = useState<string>(messageHelp);
    const handleShortClick = () => {
        navigator.clipboard.writeText(url);
        setMessage(messageSuccess);
        setTimeout(() => {
            setMessage(messageHelp);
        }, 3000);
    };
    return (
        <tr>
            <td className={styles.number}>{index + 1 + offset}</td>
            <td className={styles.short} onClick={handleShortClick}>
                <p className={classNames(styles.help, {
                    [styles.success]: message === messageSuccess,
                })}>
                    {message}
                </p>
                {url}
            </td>
            <td className={styles.count}>{counter}</td>
            <td className={styles.target}>{target}</td>
        </tr>
    );
};

export default Link;