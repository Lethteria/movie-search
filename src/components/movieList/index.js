import React from "react";
import MovieCardShort from "../movieCardShort";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function MovieList(){
    return(
        <>
            <Row xs={1} sm={2} md={4} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <MovieCardShort/>
                    </Col>
                ))}
            </Row>
        </>
    )
}