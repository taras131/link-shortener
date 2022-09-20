import React, {FC, useCallback} from "react";
import classNames from "classnames";
import styles from "./tag.module.scss";
import {setOrder} from "../../../store/link";
import {useAppDispatch} from "../../../hooks/redux";
import {orderValuesVariants, sortVariants} from "../../../config/constants";

interface ITag {
    name: sortVariants,
    value: orderValuesVariants,
    activeValue: orderValuesVariants
}

const Tag: FC<ITag> = React.memo(({name, activeValue, value}) => {

    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setOrder({name, value}));
    };
    return (
        <div className={classNames(styles.wrapper, {
            [styles.active]: value === activeValue,
            [styles.bottom_arrow]: value === orderValuesVariants.desc,
            [styles.empty]: value === orderValuesVariants.not,
        })}
             onClick={handleClick}>
        </div>
    );
});

export default Tag;