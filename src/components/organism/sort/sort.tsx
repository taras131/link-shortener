import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {getOrder} from "../../../store/link/selector";
import SortItem from "../../molecules/sort-item/sort-item";
import styles from "./sort.module.scss"

const Sort = () => {
    const order = useAppSelector(state => getOrder(state))
    return (
        <div className={styles.sort_container}>
            <SortItem name={"short"} value={order.short}/>
            <SortItem name={"counter"} value={order.counter}/>
            <SortItem name={"target"} value={order.target}/>
        </div>
    );
};

export default Sort;