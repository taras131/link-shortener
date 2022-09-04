import React, {FC} from "react";
import classNames from "classnames";
import Card from "../card/card";
import styles from "./set-limit.module.scss";
import {setLimit} from "../../../store/link";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getLimit} from "../../../store/link/selector";
import {LIMIT_VARIANTS} from "../../../config/constants";

const SetLimit: FC = () => {
    const dispatch = useAppDispatch();
    const currentLimit = useAppSelector(state => getLimit(state));
    const variantList = LIMIT_VARIANTS.map(item => {
        const handleVariantSelected = () => {
            dispatch(setLimit(item));
        };
        return (
            <span onClick={handleVariantSelected}
                  key={item}
                  className={classNames({
                      [styles.active]: currentLimit === item,
                  })}>
               {item}
           </span>);
    });
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