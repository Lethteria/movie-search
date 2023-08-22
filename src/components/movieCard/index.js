import React, from "react";
import styles from "./movieCard.module.scss";
import clsx from 'clsx';

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import RateBadge from "../rateBadge";
import CardOverview from "../cardOverview";

export default function MovieCard(props){

    const {title, releaseDate, genres, imgSrc, rate, overview,
           favoriteCardButtons, shortCardButtons, cardClassName} = props;

    return (
        <Card className={clsx( styles.wrap, cardClassName)}>
            <Card.Body>

                <div className={styles.info}>

                    <Image src={imgSrc} rounded />

                    <RateBadge rate={rate} className={styles.rate}/>

                    <div>
                        <Card.Title>{title}</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted">
                            Release: {releaseDate}
                        </Card.Subtitle>

                        <Card.Subtitle className="mb-2 text-muted">
                            Genres: <span>{genres}</span>
                        </Card.Subtitle>

                        { overview && <CardOverview text={overview}/>}

                        {favoriteCardButtons}

                    </div>

                </div>

                {shortCardButtons}

            </Card.Body>
        </Card>
    )
}