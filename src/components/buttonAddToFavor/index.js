import React from "react";
import {GrFavorite} from "react-icons/gr";
import styles from "./buttonAddToFavor.module.scss";
import Button from "react-bootstrap/Button";

export default function ButtonAddToFavor(){
    return (
        <Button variant="link">
            <GrFavorite className={styles.icon}/>
        </Button>
    )
}