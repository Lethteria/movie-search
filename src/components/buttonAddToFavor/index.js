import React from "react";
import {GrFavorite} from "react-icons/gr";
import styles from "./buttonAddToFavor.module.scss";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie, SelectFavoriteMovies} from "../../app/reducers/favoriteSlice";
import clsx from 'clsx';

export default function ButtonAddToFavor(props){

    const  dispatch = useDispatch();
    const favoriteMovies = useSelector(SelectFavoriteMovies);
    let movieIsFavorite;

    movieIsFavorite = favoriteMovies.findIndex( item => item.id === props.id)

    function onClickAddToFavorite(){
        ( movieIsFavorite === -1 )
            ?  dispatch(addMovie({...props}))
            : dispatch(removeMovie(props.id))

    }

    return (
        <Button variant="link"
                onClick={onClickAddToFavorite}
        >
            <GrFavorite className={clsx( styles.icon, {
                                        [styles.active]: movieIsFavorite !== -1}
                                   )}
            />
        </Button>
    )
}