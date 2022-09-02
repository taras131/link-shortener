import React, {FC} from 'react';
import styles from "./tag.module.scss";
import classNames from "classnames";
import {setOrder} from "../../../store/link";
import {useAppDispatch} from "../../../hooks/redux";

interface ITag {
    name: string
    value: false | "asc" | "desc",
    activeValue: false | "asc" | "desc",
}

const Tag: FC<ITag> = ({name, activeValue, value}) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setOrder({name, value}))
    }
    return (
        <div className={classNames(styles.wrapper, {
            [styles.active]: value === activeValue,
            [styles.bottom_arrow]: value === "desc",
            [styles.empty]: value === false,
        })}
             onClick={handleClick}>

        </div>
    );
};

export default Tag;