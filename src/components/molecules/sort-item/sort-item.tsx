import React, {FC} from "react";
import Tag from "../../atoms/tag/tag";
import Card from "../card/card";
import styles from "./sort-item.module.scss";
import {orderValuesVariants} from "../../../config/constants";

interface ISortItem {
    name: string
    value: orderValuesVariants.not | orderValuesVariants.asc | orderValuesVariants.desc,
}

const SortItem: FC<ISortItem> = ({name, value}) => {
    return (
        <Card>
            <p className={styles.sort_title}>{name}</p>
            <div className={styles.tags_container}>
                <Tag activeValue={value} name={name} value={orderValuesVariants.not}/>
                <Tag activeValue={value} name={name} value={orderValuesVariants.asc}/>
                <Tag activeValue={value} name={name} value={orderValuesVariants.desc}/>
            </div>
        </Card>
    );
};

export default SortItem;