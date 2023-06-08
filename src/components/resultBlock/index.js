import React from "react";
import ResultsSortFilter from "../resultsSortFilter";
import MovieList from "../movieList";
import MoviePagination from "../pagination";

export default function ResultBlock(){
    return(
        <div>
            <h2>Search Results</h2>
            <ResultsSortFilter/>
            <MovieList/>
            <MoviePagination/>
        </div>
    )
}