import React, {useEffect} from "react";
import styles from "./movieList.module.scss"
import MovieCardShort from "../movieCardShort";
import Preloader from "../preloader";
import ErrorAlert from "../errorAlert";

import {useDispatch, useSelector} from "react-redux";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    fetchAllMoviesAsync1, searchByTitleAsync1, searchUseFiltersAsync1,
    selectSearchCurrentPage, selectSearchError, selectSearchResult,
    selectSearchStatus, selectSearchType
} from "../../app/reducers/searchSlice";

import {selectSearchParam} from "../../app/reducers/searchParamSlice";


export default function MovieList(){
    const dispatch = useDispatch();
    const searchResult = useSelector(selectSearchResult);
    const searchResultStatus = useSelector(selectSearchStatus);
    const searchCurrentPage = useSelector(selectSearchCurrentPage);
    const searchType = useSelector(selectSearchType);
    const searchParam  = useSelector(selectSearchParam);
    const searchError = useSelector(selectSearchError);

    useEffect(() => {

        switch (searchType) {
            case "all":
                dispatch(fetchAllMoviesAsync1(searchCurrentPage));
                break;
            case "title":
                dispatch(searchByTitleAsync1({title: searchParam.title,page: searchCurrentPage}));
                break;
            case "filters":
                dispatch(searchUseFiltersAsync1({param: searchParam,page: searchCurrentPage}));
                break;
        }
    }, [searchCurrentPage])

    function displayMoviesList(moviesArr){
        return (
            <div className={styles.resultWrap}>
                <Row xs={1} sm={2} lg={3} xxl={4} className="g-4">
                    {
                        moviesArr.map((movie) => (
                            <Col key={movie.id}>
                                <MovieCardShort imgSrc={movie.imgSrc}
                                                title={movie.title}
                                                releaseDate={movie.releaseDate}
                                                rate={movie.rate}
                                                genres={movie.genres}
                                                id={movie.id}
                                                overview={movie.overview}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
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

            {(searchResultStatus === "failed" )
                ? <ErrorAlert>
                    <p>{searchError}</p>
                </ErrorAlert>
                : null
            }

            {searchContent}

        </>
    )
}