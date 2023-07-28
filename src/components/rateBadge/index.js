import React from "react";
import styles from "./rateBadge.module.scss";
import clsx from 'clsx'

import Badge from 'react-bootstrap/Badge';

export default function RateBadge(props){
    const {rate, className} = props;
    return (
        <Badge className={clsx(styles.rate, className)} >
            {rate}
        </Badge>
    )
}