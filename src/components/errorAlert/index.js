import React from "react";
import styles from "./errorAlert.module.scss"
import Alert from "react-bootstrap/Alert";
import {useSelector} from "react-redux";
import {selectSearchError} from "../../app/reducers/searchSlice";

export default function ErrorAlert(){

    const searchError = useSelector(selectSearchError);

    return (
        <Alert key="search-error"
               variant="primary"
               className={styles.wrap}
        >
            <p>{searchError}</p>
            <p>Please, try again.</p>
        </Alert>
    )
}