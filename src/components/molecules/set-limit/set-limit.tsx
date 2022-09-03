import React, {FC} from 'react';
import Card from "../card/card";
import {LIMIT_VARIANTS} from "../../../utils/constants";
import {setLimit} from "../../../store/link";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import styles from "./set-limit.module.scss"
import classNames from "classnames";
import {getLimit} from "../../../store/link/selector";

const SetLimit: FC = () => {
    const dispatch = useAppDispatch()
    const currentLimit = useAppSelector(state => getLimit(state))
    const variantList = LIMIT_VARIANTS.map(item => {
        const handleVariantSelected = () => {
            dispatch(setLimit(item))
        }
        return (
            <span onClick={handleVariantSelected}
                  key={item}
                  className={classNames({
                      [styles.active]: currentLimit === item
                  })}>
               {item}
           </span>)
    })
    return (
        <Card>
            <p>На странице</p>
            <div className={styles.variant_container}>
                {variantList}
            </div>
        </Card>
    );
};

export default SetLimit;