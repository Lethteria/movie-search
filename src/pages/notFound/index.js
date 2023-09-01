import React from "react";
import ErrorAlert from "../../components/errorAlert";
import Title from "../../components/title";

export default function NotFoundPage(){
    return (
        <ErrorAlert>
            <Title>
                page is not found
            </Title>
        </ErrorAlert>
    )
}
