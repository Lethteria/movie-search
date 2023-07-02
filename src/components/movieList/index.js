import React, {useEffect, useState} from "react";
import MovieCardShort from "../movieCardShort";
import Preloader from "../preloader";

import {useDispatch, useSelector} from "react-redux";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    fetchAllMoviesAsync1, searchByTitleAsync1, searchUseFiltersAsync1,
    selectSearchCurrentPage, selectSearchParam,
    selectSearchResult,
    selectSearchStatus, selectSearchType
} from "../../app/reducers/searchSlice";

export default function MovieList(){
    const dispatch = useDispatch();
    const searchResult = useSelector(selectSearchResult);
    const searchResultStatus = useSelector(selectSearchStatus);
    const searchCurrentPage = useSelector(selectSearchCurrentPage);
    const searchType = useSelector(selectSearchType);
    const searchParam  = useSelector(selectSearchParam);

    useEffect(() => {
        if (searchResultStatus === "succeeded") {
            //setMoviesSearch(true);
            //if (allMovies) dispatch(removeAllMovies());
        }
    },[searchResultStatus])

    useEffect(() => {

        switch (searchType) {
            case "all":
                dispatch(fetchAllMoviesAsync1(searchCurrentPage));
                break;
            case "title":
                dispatch(searchByTitleAsync1({title: searchParam,page: searchCurrentPage}));
                break;
            case "filters":
                dispatch(searchUseFiltersAsync1({keyword: searchParam,page: searchCurrentPage}));
                break;
        }
    }, [searchCurrentPage])

    function displayMoviesList(moviesArr){
        return moviesArr.map((movie) => (
            <Col key={movie.id}>
                <MovieCardShort imgSrc={movie.img}
                                title={movie.title}
                                year={movie.date}
                                rate={movie.rate}
                                genres={movie.genres}
                                id={movie.id}/>
            </Col>
        ))
    }

    let searchContent;
    if (searchResultStatus === "loading" && searchResult) searchContent = displayMoviesList(searchResult);
    if (searchResultStatus === "succeeded") searchContent = displayMoviesList(searchResult);

    return(
        <>
            {(searchResultStatus === "loading" )
                ? <Preloader/>
                : null
            }
            <Row xs={1} sm={2} md={4} className="g-4">
                {searchContent}
            </Row>
        </>
    )
}