import React, {FC} from 'react';
import styles from "./link.module.scss"
import {ILink} from "../../../models/i-link";

const Link: FC<ILink> = ({counter, id, short, target}) => {
    const url = process.env.REACT_APP_API_URL + "/s/" + short
    const handleShortClick = () => {
        navigator.clipboard.writeText(url)
    }
    return (
        <tr>
            <td className={styles.short} onClick={handleShortClick}>
                {url}
            </td>
            <td className={styles.count}>{counter}</td>
            <td className={styles.target}>{target}</td>
        </tr>
    );
};

export default Link;