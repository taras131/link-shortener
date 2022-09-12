import React, {FC} from "react";
import SortItem from "../../molecules/sort-item/sort-item";
import SetLimit from "../../molecules/set-limit/set-limit";
import styles from "./sort.module.scss";
import {sortVariants} from "../../../config/constants";

const Sort: FC = React.memo(() => {
    return (
        <div className={styles.wrapper}>
            <SetLimit/>
            <div className={styles.sort_container}>
                <SortItem name={sortVariants.short}/>
                <SortItem name={sortVariants.counter}/>
                <SortItem name={sortVariants.target}/>
            </div>
        </div>
    );
});

export default Sort;