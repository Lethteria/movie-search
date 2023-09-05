import React from "react";
import styles from "./movieCardFavorite.module.scss";

import MovieCard from "../movieCard";
import ButtonMoreInfo from "../buttonMoreInfo";
import ButtonDelFromFavorite from "../buttonDelFromFavorite";

function FavoriteCardButtons(props){
    return (
        <div className={styles.buttons}>
            <ButtonMoreInfo movieId={props.id} />
            <ButtonDelFromFavorite id={props.id}/>
        </div>
    )
}

export default function MovieCardFavorite(props){
    const {imgSrc, title, releaseDate, rate, genres, id, overview} = props;
    return (

        <MovieCard title={title}
                   releaseDate={releaseDate}
                   genres={genres}
                   imgSrc={imgSrc}
                   rate={rate}
                   overview={overview}
                   favoriteCardButtons={<FavoriteCardButtons id={id} />}
                   infoClassName={styles.wrap}
        />
    )
}
