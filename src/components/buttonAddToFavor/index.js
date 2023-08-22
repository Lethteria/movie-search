import React from "react";
import {GrFavorite} from "react-icons/gr";
import styles from "./buttonAddToFavor.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie, selectFavoriteMovies} from "../../app/reducers/favoriteSlice";
import clsx from 'clsx';
import button from "bootstrap/js/src/button";

export default function ButtonAddToFavor(props){

    const  dispatch = useDispatch();
    const favoriteMovies = useSelector(selectFavoriteMovies);
    let movieIsFavorite;

    movieIsFavorite = favoriteMovies.findIndex( item => item.id === props.id)

    function onClickAddToFavorite(){
        ( movieIsFavorite === -1 )
            ?  dispatch(addMovie({...props}))
            : dispatch(removeMovie(props.id))

    }

    return (
        <button className={styles.wrap}
            onClick={onClickAddToFavorite}
        >
            <GrFavorite className={clsx( styles.icon, {
                    [styles.active]: movieIsFavorite !== -1}
                )}
            />
        </button>
    )
}