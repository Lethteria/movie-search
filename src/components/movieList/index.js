import React, {useEffect, useState} from "react";
import MovieCardShort from "../movieCardShort";

import {
    fetchAllMoviesAsync,
    removeAllMovies,
    selectAllMovies,
    selectCurrentPage
} from "../../app/reducers/allMoviesSlice";
import {selectSearch} from "../../app/reducers/searchSlice";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../preloader";

export default function MovieList(){
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const allMovies = useSelector(selectAllMovies);
    const allMoviesStatus = useSelector((state) => state.allMovies.status)
    const [moviesSearch, setMoviesSearch] = useState(false);

    const searchResult = useSelector(selectSearch);
    const searchResultStatus = useSelector((state) => state.search.status);

    useEffect(() => {
        if (searchResultStatus === "succeeded") {
            setMoviesSearch(true);
            if (allMovies) dispatch(removeAllMovies());
        }
    },[searchResultStatus])

    useEffect(() => {
        dispatch(fetchAllMoviesAsync(currentPage));
        console.log(currentPage)
    }, [currentPage])

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
    if (searchResultStatus === "succeeded") searchContent = displayMoviesList(searchResult);

    let startContent;
    if (allMoviesStatus === "loading" && allMovies) startContent =  displayMoviesList(allMovies);
    if ( allMoviesStatus === "succeeded") startContent =  displayMoviesList(allMovies);

    return(
        <>
            {(allMoviesStatus === "loading" || searchResultStatus === "loading")
                ? <Preloader/>
                : null
            }
            <Row xs={1} sm={2} md={4} className="g-4">
                {(moviesSearch)
                    ? searchContent
                    : startContent
                }
            </Row>
        </>
    )
}