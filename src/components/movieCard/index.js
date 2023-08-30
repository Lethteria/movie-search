import React from "react";
import styles from "./movieCard.module.scss";
import clsx from 'clsx';

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import RateBadge from "../rateBadge";
import CardOverview from "../cardOverview";

export default function MovieCard(props){

    const {title, releaseDate, genres, imgSrc, rate, overview,
           favoriteCardButtons, shortCardButtons, cardClassName, infoClassName} = props;

    return (
        <Card className={clsx( styles.wrap, cardClassName)}>
            <Card.Body>

                <div className={clsx( styles.info, infoClassName)}>

                    <Image src={imgSrc} rounded />

                    <RateBadge rate={rate} className={styles.rate}/>

                    <div>
                        <Card.Title className={styles.title}>{title}</Card.Title>

                        <Card.Subtitle className={clsx("mb-2 text-muted", styles.subtitle)}>
                            Release: <span>{releaseDate}</span>
                        </Card.Subtitle>

                        <Card.Subtitle className={clsx("mb-2 text-muted", styles.subtitle)}>
                            Genres: <span>{genres}</span>
                        </Card.Subtitle>

                        { overview && <CardOverview text={overview}/>}

                        {favoriteCardButtons}

                    </div>

                    {shortCardButtons}

                </div>

            </Card.Body>
        </Card>
    )
}