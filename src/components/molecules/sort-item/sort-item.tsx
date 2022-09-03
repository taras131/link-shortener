import React, {FC} from 'react';
import Tag from "../../atoms/tag/tag";
import styles from "./sort-item.module.scss";
import Card from "../card/card";

interface SortItem {
    name: string
    value: false | "asc" | "desc",
}
const SortItem:FC<SortItem> = ({name, value}) => {
    return (
        <Card>
            <p className={styles.sort_title}>{name}</p>
            <div className={styles.tags_container}>
                <Tag activeValue={value} name={name} value={false}/>
                <Tag activeValue={value} name={name} value={"asc"}/>
                <Tag activeValue={value} name={name} value={"desc"}/>
            </div>
        </Card>
    );
};

export default SortItem;