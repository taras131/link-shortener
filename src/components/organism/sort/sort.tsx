import React, {FC} from "react";
import SortItem from "../../molecules/sort-item/sort-item";
import SetLimit from "../../molecules/set-limit/set-limit";
import styles from "./sort.module.scss";
import {useAppSelector} from "../../../hooks/redux";
import {getOrder} from "../../../store/link/selector";
import {sortVariants} from "../../../config/constants";

const Sort: FC = () => {
    const order = useAppSelector(state => getOrder(state))
    return (
        <div className={styles.wrapper}>
            <SetLimit/>
            <div className={styles.sort_container}>
                <SortItem name={sortVariants.short} value={order.short}/>
                <SortItem name={sortVariants.counter} value={order.counter}/>
                <SortItem name={sortVariants.target} value={order.target}/>
            </div>
        </div>
    );
};

export default Sort;