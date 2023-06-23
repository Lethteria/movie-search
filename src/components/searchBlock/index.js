import React, {useState} from "react";
import styles from "./searchBlock.module.scss";

import {selectSearch, searchMoviesAsync} from "../../app/reducers/searchSlice";
import { useSelector, useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';

export default function SearchBlock(){

    const searchResult = useSelector(selectSearch);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(" ");

    function onInputChange(e){
        let movieTitle = e.target.value;
        setInputValue(movieTitle);
        dispatch(searchMoviesAsync(movieTitle));
    }

    return(
        <div className={styles.wrap}>
            <h2>Find the movie</h2>

            <Form className={styles.form}>
                <Form.Label htmlFor="inputMovieName">Enter the title of the film</Form.Label>
                <Form.Control type="text"
                              id="inputMovieName"
                              aria-describedby="passwordHelpBlock"
                              value={inputValue}
                              onChange={onInputChange}
                />
            </Form>
        </div>
    )
}