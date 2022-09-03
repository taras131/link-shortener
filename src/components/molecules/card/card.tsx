import React, {FC} from 'react';
import styles from "./card.module.scss";

interface ICard {
    children?: React.ReactNode
}

const Card: FC<ICard> = ({children}) => {
    return (
        <article className={styles.wrapper}>
            {children}
        </article>
    );
};

export default Card;