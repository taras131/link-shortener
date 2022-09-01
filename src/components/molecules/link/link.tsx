import React, {FC} from 'react';
import styles from "./link.module.scss"
import {ILink} from "../../../models/i-link";

const Link:FC<ILink> = ({counter, id, short, target}) => {
    return (
        <div>
            <p>{counter}</p>
            <p>{id}</p>
            <p>{short}</p>
            <p>{target}</p>
        </div>
    );
};

export default Link;