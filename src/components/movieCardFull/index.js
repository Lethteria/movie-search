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
import { BsCalendarCheck } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
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
        if (genres.length) genresList = <h5>
                {
                    genres.map( item =>
                            <span className={styles.genres} key={item.id}>
                {item.name}
            </span>
                    )
                }
            </h5>

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
                        <h5>
                            <MdAccessTime/>
                            {runtime} min
                        </h5>
                        <h5>
                            <MdLanguage/>
                            {language.toUpperCase()}
                        </h5>
                    </div>

                    <div className={styles.infoDetails}>
                        <h5>
                            <BsCalendarCheck />
                            {status}
                        </h5>
                        <h5>
                            {releaseDate}
                        </h5>
                        <h5>

                            <BiDollar />
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

                        <ButtonAddToFavor />
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
