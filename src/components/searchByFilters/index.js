import React from "react";
import styles from "./searchByFilters.module.scss";

import Form from 'react-bootstrap/Form';

import FilterInputAutocomplete from "../filterInputAutocomplete";
import FilterBlockGenres from "../filterBlockGenres";
import FilterBlockSortBy from "../filterBlockSortBy";
import ButtonSearchByFilters from "../buttonSearchByFilters";
import ButtonCleanSearch from "../buttonClearSearch";

export default function SearchByFilters(){

    return (
        <Form className={styles.form}>

            <Form.Group className={styles.blockWrap}>
                <FilterInputAutocomplete />
            </Form.Group>

            <Form.Group className={styles.blockWrap}>
                <FilterBlockGenres />
            </Form.Group>

            <Form.Group className={`${styles.blockWrap} ${styles.sortBy}`}>
                <FilterBlockSortBy />

                <ButtonCleanSearch />
            </Form.Group>

            <ButtonSearchByFilters/>

        </Form>
    )
}