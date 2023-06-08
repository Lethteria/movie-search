import React from "react";
import styles from "./pagination.module.scss";
import Pagination from 'react-bootstrap/Pagination';

export default function MoviePagination(){

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
            <Pagination className={styles.pagination}>
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>
    )
}