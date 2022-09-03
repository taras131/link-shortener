import React, {FC} from "react";
import classNames from "classnames";
import styles from "./tag.module.scss";
import {setOrder} from "../../../store/link";
import {useAppDispatch} from "../../../hooks/redux";
import {orderValuesVariants} from "../../../utils/constants";

interface ITag {
    name: string,
    value: orderValuesVariants.not | orderValuesVariants.asc | orderValuesVariants.desc,
    activeValue: orderValuesVariants.not | orderValuesVariants.asc | orderValuesVariants.desc
}

const Tag: FC<ITag> = ({name, activeValue, value}) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setOrder({name, value}))
    }
    return (
        <div className={classNames(styles.wrapper, {
            [styles.active]: value === activeValue,
            [styles.bottom_arrow]: value === orderValuesVariants.desc,
            [styles.empty]: value === orderValuesVariants.not,
        })}
             onClick={handleClick}>
        </div>
    );
};

export default Tag;