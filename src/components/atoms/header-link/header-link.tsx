import React, {FC} from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from "./header-link.module.css";
import classNames from "classnames";

interface IHeaderLink {
    path: string,
    title: string,
}

const HeaderLink: FC<IHeaderLink> = ({path, title}) => {
    const {pathname} = useLocation();
    return (
        <li>
            <Link to={path} className={classNames(styles.link, {
                [styles.active]: pathname === path
            })}>
                {title}
            </Link>
        </li>
    );
};

export default HeaderLink;