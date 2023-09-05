import React, {useEffect} from "react";
import styles from "./movieList.module.scss"
import MovieCardShort from "../movieCardShort";
import Preloader from "../preloader";
import ErrorAlert from "../errorAlert";

import {useSelector} from "react-redux";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { selectSearchCurrentPage, selectSearchError,
         selectSearchResult, selectSearchStatus
        } from "../../app/reducers/searchSlice";

import useSearch from "../../hooks/useSearch";


export default function MovieList(){
    const searchResult = useSelector(selectSearchResult);
    const searchResultStatus = useSelector(selectSearchStatus);
    const searchCurrentPage = useSelector(selectSearchCurrentPage);
    const search = useSearch();
    const searchError = useSelector(selectSearchError);

    useEffect(() => {
        search();
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