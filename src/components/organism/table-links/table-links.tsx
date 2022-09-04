import React, {FC, useEffect} from "react";
import Link from "../../molecules/link/link";
import Button from "../../atoms/button/button";
import Sort from "../sort/sort";
import Preloader from "../../templates/preloader/preloader";
import styles from "./table-links.module.scss";
import {getLinks} from "../../../store/link/thunk";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {showNext, showPrevious} from "../../../store/link";
import {
    getAllLinks,
    getIsLinkLoading,
    getLimit, getNewLink,
    getOffset,
    getOrder,
    getThereIsNextPage
} from "../../../store/link/selector";

const TableLinks: FC = () => {
    const dispatch = useAppDispatch()
    const links = useAppSelector(state => getAllLinks(state))
    const offset = useAppSelector(state => getOffset(state))
    const limit = useAppSelector(state => getLimit(state))
    const isThereNextPage = useAppSelector(state => getThereIsNextPage(state))
    const order = useAppSelector(state => getOrder(state))
    const isLinkLoading = useAppSelector(state => getIsLinkLoading(state))
    const newLink = useAppSelector(state => getNewLink(state))
    useEffect(() => {
        dispatch(getLinks({offset: offset, limit: limit + 1, order: order}))
    }, [dispatch, offset, order, limit, newLink])
    const linksList = links.map((item, index) => <Link index ={index} {...item}
                                                       key={item.id} offset={offset}/>)
    const handleNextClick = () => {
        dispatch(showNext())
    }
    const handlePreviousClick = () => {
        dispatch(showPrevious())
    }
    if (linksList.length === 0) return (<p className={styles.empty_links_tab}>У вас пока нет ссылок</p>)
    return (
        <section>
            <Sort/>
            {isLinkLoading && (<Preloader/>)}
            {!isLinkLoading && (
                <>
                    <table className={styles.table}>
                        <caption>История сокращений. Кликнете по ссылке чтобы скопировать.</caption>
                        <thead>
                        <tr>
                            <th className={styles.number}>№</th>
                            <th>Ссылка</th>
                            <th>Пос<span>ещения</span></th>
                            <th className={styles.target}>Исходный материал</th>
                        </tr>
                        </thead>
                        <tbody>
                        {linksList}
                        </tbody>
                    </table>
                    <div className={styles.pagination_buttons}>
                        <Button text={"Предыдущая"}
                                isDisable={offset === 0}
                                handleClick={handlePreviousClick}/>
                        <Button text={"Следующая"}
                                isDisable={!isThereNextPage}
                                handleClick={handleNextClick}/>
                    </div>
                </>
            )}

        </section>

    );
};

export default TableLinks;