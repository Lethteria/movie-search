import React from "react";
import styles from "./errorAlert.module.scss"
import Alert from "react-bootstrap/Alert";

export default function ErrorAlert({children}){

    return (
        <Alert key="search-error"
               variant="primary"
               className={styles.wrap}
        >
            {children}
        </Alert>
    )
}