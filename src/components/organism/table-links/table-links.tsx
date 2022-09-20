import React, {FC, useCallback, useEffect} from "react";
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
    getThereIsNextPage,
} from "../../../store/link/selector";
import LinksList from "../links-list/links-list";
import EmptyLinksList from "../../molecules/empty-links-list/empty-links-list";

const TableLinks: FC = () => {
    const dispatch = useAppDispatch();
    const offset = useAppSelector(state => getOffset(state));
    const limit = useAppSelector(state => getLimit(state));
    const links = useAppSelector(state => getAllLinks(state));
    const isThereNextPage = useAppSelector(state => getThereIsNextPage(state));
    const order = useAppSelector(state => getOrder(state));
    const isLinkLoading = useAppSelector(state => getIsLinkLoading(state));
    const newLink = useAppSelector(state => getNewLink(state));
    const handleNextClick = useCallback(() => {
        dispatch(showNext());
    }, [dispatch]);
    const handlePreviousClick = useCallback(() => {
        dispatch(showPrevious());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getLinks({offset: offset, limit: limit + 1, order: order}));
    }, [dispatch, offset, order, limit, newLink]);
    if (links.length === 0) return (<EmptyLinksList/>);
    return (
        <section>
            <Sort/>
            {isLinkLoading
                ? (<Preloader/>)
                : (<>
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
                            <LinksList links={links} offset={offset}/>
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