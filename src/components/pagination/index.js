import React, {useEffect, useState} from "react";
import styles from "./pagination.module.scss";
import Pagination from 'react-bootstrap/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {selectSearchCurrentPage, selectSearchType, setCurrentPage} from "../../app/reducers/searchSlice";

export default function MoviePagination(){

    const currentPage = useSelector(selectSearchCurrentPage);
    const dispatch = useDispatch();
    const searchType = useSelector(selectSearchType);
    const [activePage, setActivePage] = useState(currentPage);
    let pages = [1,2,3,4,5,6,7,8,9,10];

    //useEffect(() => {
        //setActivePage(+currentPage);
        //console.log(`page ${currentPage}`)
    //}, [currentPage])

    useEffect(() => {
        setActivePage(1);
    //console.log(`page ${currentPage}`)
    }, [searchType])

    function onPageClick(e){
        const page = e.target.id;
        dispatch(setCurrentPage(page));
        setActivePage(+page)
    }

    const pageList = pages.map((page) =>
        <Pagination.Item key={page}
                         id={page}
                         active={page === activePage}
                         onClick={onPageClick}
        >
            {page}
        </Pagination.Item>,
    )

    return (
            <Pagination className={styles.pagination}>
                <Pagination.Prev />
                {pageList}
                <Pagination.Next />
            </Pagination>
    )
}