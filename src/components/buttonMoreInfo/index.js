import React from "react";

import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux";
import {fetchMovieAsync} from "../../app/reducers/movieSlice";

export default function ButtonMoreInfo(props){
    const dispatch = useDispatch();

    function onClickButton(){
        dispatch(fetchMovieAsync(props.movieId));
    }

    return (
        <Button variant="outline-primary"
                onClick={onClickButton}
        >
            More info
        </Button>
    )
}