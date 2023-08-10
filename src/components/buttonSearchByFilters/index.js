import React from "react";
import styles from "./buttonSearchByFilters.module.scss"
import {useDispatch, useSelector} from 'react-redux';

import { searchUseFiltersAsync1,
         setCurrentPage
        } from "../../app/reducers/searchSlice";

import {selectSearchParam } from "../../app/reducers/searchParamSlice";

import Button from "react-bootstrap/Button";

export default function ButtonSearchByFilters(){

    const dispatch = useDispatch();
    const searchParameters = useSelector(selectSearchParam);

    function onClickSearch(){
        dispatch(setCurrentPage(1));
        dispatch(searchUseFiltersAsync1({param: searchParameters,page: 1}));
    }

    return (
        <Button variant="primary"
                className={styles.wrap}
                onClick={onClickSearch}
        >
            Search
        </Button>
    )
}