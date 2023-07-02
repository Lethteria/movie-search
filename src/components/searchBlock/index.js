import React, {useState} from "react";
import styles from "./searchBlock.module.scss";
import SearchByTitle from "../searchByTitle";

import {searchUseFiltersAsync} from "../../app/reducers/searchUseFiltersSlice";
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {searchUseFiltersAsync1, setCurrentPage, setSearchParam} from "../../app/reducers/searchSlice";


export default function SearchBlock(){

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(" ");

    function onInputChange(e){
        let movieTitle = e.target.value.trim();

        setInputValue(movieTitle);
        dispatch(searchUseFiltersAsync1({keyword: movieTitle,page: 1}));
        dispatch(setSearchParam(movieTitle));
        dispatch(setCurrentPage(1));
    }

    return(
        <div className={styles.wrap}>
            <h2>Find the movie</h2>

            <Tabs
                defaultActiveKey="title"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="title" title="Search by title">
                    <SearchByTitle />
                </Tab>

                <Tab eventKey="filters" title="Use filters">

                    <Form className={styles.form}>
                        <Form.Label htmlFor="inputMovieName">Enter the keyword </Form.Label>
                        <Form.Control type="text"
                                      id="inputMovieName"
                                      aria-describedby="passwordHelpBlock"
                                      value={inputValue}
                                      onChange={onInputChange}
                        />
                    </Form>

                </Tab>

            </Tabs>

        </div>
    )
}