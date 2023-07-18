import React from "react";
import styles from "./searchBlock.module.scss";
import SearchByTitle from "../searchByTitle";
import SearchByFilters from "../searchByFilters";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Title from "../title";

export default function SearchBlock(){

    return(
        <div className={styles.wrap}>
            <Title>Find the movie</Title>

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
                    <SearchByFilters />
                </Tab>

            </Tabs>

        </div>
    )
}