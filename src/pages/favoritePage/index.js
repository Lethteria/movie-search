import React from "react";
import styles from "./favoritePage.module.scss";
import Title from "../../components/title";
import MovieListFavorite from "../../components/movieListFavorite";

export default function FavoritePage(){
    return(
        <div className={styles.wrap}>
            <Title>
                Favorite movies
            </Title>

            <MovieListFavorite />
        </div>
    )
}