import React, {useEffect, useState} from "react";
import styles from "./pagination.module.scss";
import {createPages} from "./paginationHelpFunctions";

import Pagination from 'react-bootstrap/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {
    selectSearchCurrentPage,
    selectSearchTotalPages,
    selectSearchType,
    setCurrentPage
} from "../../app/reducers/searchSlice";

export default function MoviePagination(){

    const currentPage = useSelector(selectSearchCurrentPage);
    const dispatch = useDispatch();
    const searchType = useSelector(selectSearchType);
    const totalPages = useSelector(selectSearchTotalPages);
    const [activePage, setActivePage] = useState(currentPage);
    const pages = createPages(currentPage, totalPages);

    useEffect(() => {
        setActivePage(1);
    }, [searchType])

    function displayPageItem(page){
        return <Pagination.Item key={page}
                                id={page}
                                active={page === activePage}
                                onClick={onPageClick}
        >
            {page}
        </Pagination.Item>
    }

    const pageList = pages.map((page) => displayPageItem(page))

    const nextButton = (+currentPage === totalPages)
        ? <Pagination.Next disabled/>
        : <Pagination.Next onClick={onNextClick}/>

    const prevButton = (+currentPage === 1)
        ? <Pagination.Prev disabled/>
        : <Pagination.Prev onClick={onPrevClick}/>

    function onPageClick(e){
        const page = e.target.id;
        dispatch(setCurrentPage(page));
        setActivePage(+page)
    }

    function onNextClick(){
        dispatch(setCurrentPage(activePage + 1));
        setActivePage((page) => page + 1);
    }

    function onPrevClick(){
        dispatch(setCurrentPage(activePage - 1));
        setActivePage((page) => page - 1)
    }

    return (
            <Pagination className={styles.pagination}>

                { (totalPages > 1 ) ? <>{prevButton}</> : null }

                {displayPageItem(1)}

                {(+currentPage > 4 && totalPages > 7)
                    ? <Pagination.Ellipsis disabled/>
                    : null
                }

                {pageList}

                { (+currentPage < totalPages - 3 && totalPages > 7)
                    ? <Pagination.Ellipsis disabled/>
                    : null
                }

                { (totalPages > 1 )
                    ? <>
                        {displayPageItem(totalPages)}

                        {nextButton}
                      </>
                    : null
                }

            </Pagination>
    )
}