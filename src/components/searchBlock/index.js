import React, {useState} from "react";
import styles from "./searchBlock.module.scss";

import Form from 'react-bootstrap/Form';

export default function SearchBlock(){
    const [inputValue, setInputValue] = useState(" ");
    function onInputChange(e){
        setInputValue(e.target.value)
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