import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {getOrder} from "../../../store/link/selector";
import SortItem from "../../molecules/sort-item/sort-item";
import SetLimit from "../../molecules/set-limit/set-limit";
import styles from "./sort.module.scss"

const Sort = () => {
    const order = useAppSelector(state => getOrder(state))
    return (
        <div className={styles.wrapper}>
            <SetLimit/>
            <div className={styles.sort_container}>
                <SortItem name={"short"} value={order.short}/>
                <SortItem name={"counter"} value={order.counter}/>
                <SortItem name={"target"} value={order.target}/>
            </div>
        </div>
    );
};

export default Sort;