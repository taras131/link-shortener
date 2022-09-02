import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getAllLinks, getLimit, getOffset, getOrder, getThereIsNextPage} from "../../../store/link/selector";
import {getLinks} from "../../../store/link/thunk";
import Link from "../../molecules/link/link";
import Button from "../../atoms/button/button";
import {showNext, showPrevious} from "../../../store/link";
import Sort from "../sort/sort";
import styles from "./table-links.module.scss";

const TableLinks = () => {
    const dispatch = useAppDispatch()
    const links = useAppSelector(state => getAllLinks(state))
    const offset = useAppSelector(state => getOffset(state))
    const limit = useAppSelector(state => getLimit(state))
    const isThereNextPage = useAppSelector(state => getThereIsNextPage(state))
    const order = useAppSelector(state => getOrder(state))
    useEffect(() => {
        dispatch(getLinks({offset: offset, limit: limit + 1, order: order}))
    }, [dispatch, offset, order])
    const linksList = links.map(item => <Link {...item} key={item.id}/>)
    const handleNextClick = () => {
        dispatch(showNext())
    }
    const handlePreviousClick = () => {
        dispatch(showPrevious())
    }
    return (
        <section className={styles.table_section}>
            <Sort/>
            <table className={styles.table}>
                <caption>История сокращений</caption>
                <thead>
                <tr>
                    <th>Ссылка</th>
                    <th>Посещения</th>
                    <th className={styles.target}>Исходный материал</th>
                </tr>
                </thead>
                <tbody>
                {linksList}
                </tbody>
            </table>
            <div className={styles.pagination_buttons}>
                <Button text={"Предыдущая"} isDisable={offset === 0} handleClick={handlePreviousClick}/>
                <Button text={"Следующая"} isDisable={!isThereNextPage} handleClick={handleNextClick}/>
            </div>
        </section>
    );
};

export default TableLinks;