import React from "react";

import SearchBlock from "../../components/searchBlock";
import ResultBlock from "../../components/resultBlock";

import Container from 'react-bootstrap/Container';

export default function SearchMoviePage(){
    return (
        <Container fluid="lg">
            <SearchBlock/>
            <ResultBlock/>
        </Container>
    )
}
