import React from "react";

import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux";
import {fetchMovieAsync} from "../../app/reducers/movieSlice";
import {Link} from "react-router-dom";

export default function ButtonMoreInfo(props){
    const dispatch = useDispatch();

    function onClickButton(){
        dispatch(fetchMovieAsync(props.movieId));
    }

    return (
        <Link to="/movie">
            <Button variant='primary'
                    onClick={onClickButton}
            >
                More info
            </Button>
        </Link>
    )
}