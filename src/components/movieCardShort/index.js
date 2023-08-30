import React from "react";
import styles from "./movieCardShort.module.scss";

import MovieCard from "../movieCard";
import ButtonMoreInfo from "../buttonMoreInfo";
import ButtonAddToFavor from "../buttonAddToFavor";

function ShortCardButtons(props){
    return (
        <div className={styles.buttons}>
            <ButtonMoreInfo movieId={props.id} />
            <ButtonAddToFavor {...props}/>
        </div>
    )
}

export default function MovieCardShort(props){
    const {imgSrc, title, releaseDate, rate, genres} = props;
    return (

        <MovieCard title={title}
                   releaseDate={releaseDate}
                   genres={genres}
                   imgSrc={imgSrc}
                   rate={rate}
                   shortCardButtons={
                       <ShortCardButtons {...props} />
                   }
                   cardClassName={styles.wrap}
                   infoClassName={styles.info}
        />
    )
}
