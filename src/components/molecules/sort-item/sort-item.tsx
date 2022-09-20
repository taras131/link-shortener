import React, {FC} from "react";
import Tag from "../../atoms/tag/tag";
import Card from "../card/card";
import styles from "./sort-item.module.scss";
import {orderValuesVariants, sortVariants} from "../../../config/constants";
import {useAppSelector} from "../../../hooks/redux";
import {getOrderValueByName} from "../../../store/link/selector";

interface ISortItem {
    name: sortVariants,
}

const SortItem: FC<ISortItem> = ({name}) => {
    const activeValue = useAppSelector(state => getOrderValueByName(state, name));
    return (
        <Card>
            <p className={styles.sort_title}>{name}</p>
            <div className={styles.tags_container}>
                <Tag activeValue={activeValue} name={name} value={orderValuesVariants.not}/>
                <Tag activeValue={activeValue} name={name} value={orderValuesVariants.asc}/>
                <Tag activeValue={activeValue} name={name} value={orderValuesVariants.desc}/>
            </div>
        </Card>
    );
};

export default SortItem;