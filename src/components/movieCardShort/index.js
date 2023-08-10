import React from "react";
import styles from "./movieCardShort.module.scss";

import ButtonMoreInfo from "../buttonMoreInfo";
import ButtonAddToFavor from "../buttonAddToFavor";
import RateBadge from "../rateBadge";

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function MovieCardShort(props){
    const {imgSrc, title, year, rate, genres, id} = props;
    return(
    <Card>
        <Card.Body>

            <div className={styles.info}>
                <Image src={imgSrc} rounded />
                <RateBadge rate={rate} className={styles.rate}></RateBadge>

                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Year: {year}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Genres: {genres}</Card.Subtitle>
                </div>
            </div>

            <div className={styles.buttons}>
                <ButtonMoreInfo movieId={id} />
                <ButtonAddToFavor {...props}/>
            </div>

        </Card.Body>

    </Card>
    )
}