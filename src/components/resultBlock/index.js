import React from "react";
import MovieList from "../movieList";
import MoviePagination from "../pagination";
import {useSelector} from "react-redux";
import {selectSearchType} from "../../app/reducers/searchSlice";
import Title from "../title";

export default function ResultBlock(){

    const searchType = useSelector(selectSearchType);

    return(
        <div>
            {(searchType === "all")
                ? <Title>Popular films</Title>
                : <Title>Search Results</Title>
            }

            <MovieList/>
            <MoviePagination/>
        </div>
    )
}