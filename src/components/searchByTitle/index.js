import React, {useState} from "react";

import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import styles from "../searchBlock/searchBlock.module.scss";
import {searchByTitleAsync1, setCurrentPage, setSearchParam} from "../../app/reducers/searchSlice";


export default function SearchByTitle(){

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(" ");

    function onInputChange(e){
        setInputValue(e.target.value);
        let title = e.target.value.trim();
        if ( !title.length) title = " ";
        dispatch(searchByTitleAsync1({title,page: 1}));
        dispatch(setSearchParam({title}));
        dispatch(setCurrentPage(1));
    }

    return(
        <Form className={styles.form}>
            <Form.Label htmlFor="inputMovieName">Enter the title of the film</Form.Label>
            <Form.Control type="text"
                          id="inputMovieName"
                          aria-describedby="passwordHelpBlock"
                          value={inputValue}
                          onChange={onInputChange}
            />
        </Form>
    )
}