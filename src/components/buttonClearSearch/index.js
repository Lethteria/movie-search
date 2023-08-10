import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {resetSearchFilter} from "../../app/reducers/searchParamSlice";

export default function ButtonCleanSearch() {

    const dispatch = useDispatch();

    function onClickClear(){
        dispatch(resetSearchFilter());
    }

    return (
        <Button variant="outline-secondary"
                size="sm"
                onClick={onClickClear}
        >
            Clear all
            <AiOutlineClose />
        </Button>
    );
}

