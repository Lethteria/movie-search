import React from 'react';
import styles from "./buttonsDelFromFavorite.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {removeMovie} from "../../app/reducers/favoriteSlice";



export default function ButtonDelFromFavorite({id}) {

    const dispatch = useDispatch();

    function onClickDel(){
        dispatch(removeMovie(id));
    }

    return (
        <Button variant="outline-secondary"
                className={styles.wrap}
                onClick={onClickDel}
        >
            Delete

            <FaTrashAlt />
        </Button>
    );
}

