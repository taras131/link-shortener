import React, {FC} from 'react';
import styles from "./link.module.scss"
import {ILink} from "../../../models/i-link";

const Link: FC<ILink> = ({counter, id, short, target}) => {
    const handleShortClick = () => {
        navigator.clipboard.writeText(process.env.REACT_APP_API_URL + "/s/" + short)
    }
    return (
        <tr>
            <td className={styles.short} onClick={handleShortClick}>
                {process.env.REACT_APP_API_URL + "/s/" + short}
            </td>
            <td className={styles.count}>{counter}</td>
            <td className={styles.target}>{target}</td>
        </tr>
    );
};

export default Link;