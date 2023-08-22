import React from "react";
import styles from "./filterBlockGenres.module.scss"

import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import {useDispatch, useSelector} from "react-redux";
import {selectGenres} from "../../app/reducers/genresSlice";
import {removeSearchGenres, setSearchParam} from "../../app/reducers/searchParamSlice";

function GenresButton(props){

    const {isActive, id, children} = props;
    const dispatch = useDispatch();

    function onClickGenresBtn(e){
        let genre = e.target.id;
        isActive ? dispatch(removeSearchGenres(genre)) : dispatch(setSearchParam({genres: genre}));
    }

    return (
        <Button variant={isActive ? ("primary") : ("outline-primary")}
                size="sm"
                id={id}
                onClick={onClickGenresBtn}
                active={false}
        >
            {children}
        </Button>
    )
}

export default function FilterBlockGenres(){

    const genres = useSelector(selectGenres);
    const activeGenres = useSelector((state) => state.searchParam.data.genres);

    let genresList;
    if (genres) {
        genresList = genres.map((item) => {
            let isActiveBtn = activeGenres.includes(item.id.toString());

            return <GenresButton id={item.id}
                                 key={item.id}
                                 isActive={isActiveBtn}
                                 name = {item.name}
                   >
                     {item.name}
                   </GenresButton>
            }
        );
    }

    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className={styles.wrap}>
                <Accordion.Header className={styles.header}>Choose genres</Accordion.Header>
                <Accordion.Body className={styles.genres}>
                    {genresList}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}