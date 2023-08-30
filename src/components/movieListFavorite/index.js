import React from "react";

import ErrorAlert from "../errorAlert";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {useSelector} from "react-redux";
import {selectFavoriteMovies, selectFavoriteMoviesTotal} from "../../app/reducers/favoriteSlice";
import Container from "react-bootstrap/Container";
import MovieCardFavorite from "../movieCardFavorite";

export default function MovieListFavorite(){

    const movies = useSelector(selectFavoriteMovies);
    const totalMovies = useSelector(selectFavoriteMoviesTotal);

    function displayMoviesList(moviesArr){
        return (
            <div >
                <Row xs={1} sm={1} xl={2} className="g-5">
                    {
                        moviesArr.map((movie) => (
                            <Col key={movie.id}>
                                <MovieCardFavorite imgSrc={movie.imgSrc}
                                                title={movie.title}
                                                releaseDate={movie.releaseDate}
                                                genres={movie.genres}
                                                id={movie.id}
                                                overview={movie.overview}
                                                rate={movie.rate}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }

    return (
        <Container fluid="lg">
            { totalMovies
                ? displayMoviesList(movies)
                : <ErrorAlert>
                    <p>List of favorite movies is empty</p>
                </ErrorAlert>
            }
        </Container>
    )
}