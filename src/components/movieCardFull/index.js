import React from "react";
import styles from "./movieCardFull.module.scss";
import RateBadge from "../rateBadge";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import clsx from 'clsx';

import {useSelector} from "react-redux";
import {selectMovie, selectMovieStatus} from "../../app/reducers/movieSlice";

import { MdLanguage } from "react-icons/md";
import {MdAccessTime} from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";
import ButtonAddToFavor from "../buttonAddToFavor";

export default function MovieCardFull(){

    const loadStatus = useSelector(selectMovieStatus);
    const movie = useSelector(selectMovie);

    let movieCard;

    if (loadStatus === "succeeded") {
        const {fullImg, budget, genres, id, language, title, overview,
            releaseDate, year, runtime, status, tagline, rate, poster} = movie;

        let path;
        if (fullImg) path = `url("${fullImg}")`;


        let genresList;
        let genresString;
        if (genres.length)  {
            genresList = <h5>
                            {
                                genres.map( item =>
                                    <span className={styles.genres} key={item.id}>
                                            {item.name}
                                        </span>
                                )
                            }
                        </h5>
            genresString = genres.map(item => item.name).join(", ");
        }

        let movieTagline;
        if (tagline) movieTagline = <h5 className={styles.tagline}>
                                        {tagline}
                                    </h5>

        movieCard =  <div className={styles.cardWrap}>
            <div className={styles.poster}>
                <Image src={poster} thumbnail />
            </div>

            <div className={styles.infoWrap} style={{backgroundImage: `${path}`}}>
                <div className={styles.info}>

                    <h2>
                        {title}
                        <span className={styles.year}>( {year} )</span>
                    </h2>

                    <div className={styles.infoDetails}>
                        {genresList}
                        <h5 className={styles.subtitleWrap}>
                            <MdAccessTime/>
                            {runtime} min
                        </h5>
                        <h5 className={styles.subtitleWrap}>
                            <MdLanguage/>
                            {language.toUpperCase()}
                        </h5>
                    </div>

                    <div className={styles.infoDetails}>
                        <h5 className={styles.subtitleWrap}>
                            <VscCalendar />
                            {status}
                        </h5>
                        <h5>
                            {releaseDate}
                        </h5>
                        <h5 className={styles.subtitleWrap}>
                            <AiOutlineDollar />
                            {budget}
                        </h5>
                    </div>

                    <div className={styles.infoDetails}>
                        <h5>director: Hbcfvb Gnmc</h5>
                    </div>

                    {movieTagline}

                    <p> {overview} </p>

                    <div className={clsx(styles.infoDetails, styles.footer)}>

                        <h5>Rating
                            <RateBadge rate={rate} className={styles.rate}/>
                        </h5>

                        <ButtonAddToFavor id={id}
                                          imgSrc={poster}
                                          title={title}
                                          releaseDate={releaseDate}
                                          rate={rate}
                                          genres={genresString}
                                          overview={overview}
                        />
                    </div>

                </div>
            </div>
        </div>
    }


    return(
        <div className={styles.wrap}>
            <Container fluid="lg">

                {movieCard}

            </Container>
        </div>
    )
}
