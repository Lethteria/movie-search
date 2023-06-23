import React from "react";
import logoPath from "../../assets/img/logo.jpg";
import styles from "./logo.module.scss";

export default function Logo(props){
    return (
        <div className={props.className}>
            <img src={logoPath} alt=""/>
        </div>
    )
}