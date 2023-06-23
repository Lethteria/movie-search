import React, {useState} from "react";
import styles from "./pagination.module.scss";
import Pagination from 'react-bootstrap/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage, setCurrentPage} from "../../app/reducers/allMoviesSlice";

export default function MoviePagination(){

    const currentPage = useSelector(selectCurrentPage);
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(currentPage)
    let pages = [1,2,3,4,5,6,7,8,9,10];

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