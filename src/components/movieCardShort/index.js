import React from "react";
import styles from "./movieCardShort.module.scss";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import {GrFavorite} from "react-icons/gr";

export default function MovieCardShort(props){
    const {imgSrc, title, year, rate, genres, id} = props;
    return(
    <Card>
        <Card.Body>

            <div className={styles.info}>
                <Image src={imgSrc} rounded />
                <Badge className={styles.rate} >
                    {rate}
                </Badge>

                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Year: {year}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Genres: {genres}</Card.Subtitle>
                </div>
            </div>

            <div className={styles.buttons}>
                <Button variant="outline-primary">More info</Button>
                <Button variant="link">
                    <GrFavorite className={styles.icon}/>
                </Button>
            </div>

        </Card.Body>

    </Card>
    )
}