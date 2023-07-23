import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import Form from 'react-bootstrap/Form';
import styles from "../searchBlock/searchBlock.module.scss";
import {
    searchUseFiltersAsync1,
    setCurrentPage
} from "../../app/reducers/searchSlice";

import {selectSearchParam} from "../../app/reducers/searchParamSlice";
import FilterInputAutocomplete from "../filterInputAutocomplete";
import FilterBlockGenres from "../filterBlockGenres";
import FilterBlockSortBy from "../filterBlockSortBy";
import Button from "react-bootstrap/Button";


export default function SearchByFilters(){

    const dispatch = useDispatch();
    const searchParameters = useSelector(selectSearchParam);

    function onClickSearch(){
        dispatch(setCurrentPage(1));
        dispatch(searchUseFiltersAsync1({param: searchParameters,page: 1}));
    }

    return (
        <Form className={styles.form}>

            <Form.Group>
                <FilterInputAutocomplete />
            </Form.Group>

            <Form.Group>
                <FilterBlockSortBy />
            </Form.Group>

            <Form.Group>
                <FilterBlockGenres />
            </Form.Group>

            <Button variant="primary"
                    onClick={onClickSearch}
            >
                Search
            </Button>

        </Form>
    )
}