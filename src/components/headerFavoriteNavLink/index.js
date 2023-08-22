import React from 'react';
import styles from "./headerFavoriteNavLink.module.scss"
import {GrFavorite} from "react-icons/gr";
import Badge from "react-bootstrap/Badge";
import {useSelector} from "react-redux";
import {selectFavoriteMoviesTotal} from "../../app/reducers/favoriteSlice";

export default function HeaderFavoriteNavLink() {

    const total = useSelector(selectFavoriteMoviesTotal);

    return (
        <div className={styles.wrap}>
            <span className={styles.text}>Favorite</span>
            <GrFavorite className={styles.icon}/>
            <Badge pill className={styles.badge} bg="info">{total}</Badge>
        </div>
    );
}

