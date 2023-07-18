import React from "react";
import styles from "./title.module.scss";

export default function Title(props){
    return (
        <h2 className={styles.wrap}>
            {props.children}
        </h2>
    )
}