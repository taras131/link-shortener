import React, {FC} from "react";
import classNames from "classnames";
import styles from "./header-link.module.scss";
import {Link, useLocation} from "react-router-dom";

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