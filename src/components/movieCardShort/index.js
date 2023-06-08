import React from "react";
import styles from "./movieCardShort.module.scss";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import {GrFavorite} from "react-icons/gr";

export default function MovieCardShort(){
    return(
    <Card>
        <Card.Body>

            <div className={styles.info}>
                <Image src="https://www.img.cz/wp-content/uploads/2021/09/img-logo.gif" rounded />

                <div>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Year: 2000</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Countrie: Subtitle</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Rate: 7.8</Card.Subtitle>
                </div>
            </div>

            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>

        </Card.Body>

        <Card.Body className={styles.buttons}>
            <Button variant="outline-primary">More info</Button>
            <Button variant="link">
                <GrFavorite className={styles.icon}/>
            </Button>
        </Card.Body>

    </Card>
    )
}