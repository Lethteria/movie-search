import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import Form from 'react-bootstrap/Form';
import styles from "../searchBlock/searchBlock.module.scss";
import {
    searchUseFiltersAsync1,
    selectSearchParam,
    setCurrentPage,
    setSearchParam
} from "../../app/reducers/searchSlice";
import FilterBlockGenres from "../filterBlockGenres";
import FilterBlockSortBy from "../filterBlockSortBy";
import Button from "react-bootstrap/Button";

export default function SearchByFilters(){

    const dispatch = useDispatch();
    const searchParametres = useSelector(selectSearchParam);
    const [inputValue, setInputValue] = useState(" ");

    function onInputChange(e){
        let movieTitle = e.target.value;
        setInputValue(movieTitle);
        dispatch(setSearchParam({keyword: movieTitle.trim()}));
    }

    function onClickSearch(){
        dispatch(setCurrentPage(1));
        dispatch(searchUseFiltersAsync1({param: searchParametres,page: 1}));
    }

    return (
        <Form className={styles.form}>
            <Form.Group>
                <Form.Label htmlFor="inputMovieName">Enter the keyword </Form.Label>
                <Form.Control type="text"
                              id="inputMovieName"
                              aria-describedby="passwordHelpBlock"
                              value={inputValue}
                              onChange={onInputChange}
                />
            </Form.Group>

            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

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