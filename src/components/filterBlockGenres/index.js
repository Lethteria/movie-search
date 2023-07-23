import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import {useDispatch, useSelector} from "react-redux";
import {selectGenres} from "../../app/reducers/genresSlice";
import {removeSearchGenres, setSearchParam} from "../../app/reducers/searchParamSlice";

function GenresButton(props){

    const [active, setActive] = useState('false');
    const dispatch = useDispatch();

    function onClickGenresBtn(e){
        let genre = e.target.id;
        active ? dispatch(setSearchParam({genres: genre})) : dispatch(removeSearchGenres(genre));
        setActive(state => !state )
    }

    return (
        <Button variant={active ? ("outline-primary") : ("primary")}
                size="sm"
                id={props.id}
                onClick={onClickGenresBtn}
                active={false}
        >
            {props.children}
        </Button>
    )
}

export default function FilterBlockGenres(){

    const genres = useSelector(selectGenres);

    let genresList;
    if (genres) genresList = genres.map((item) => (
            <GenresButton id={item.id}
                          key={item.id}
            >
                {item.name}
            </GenresButton>
        )
    );
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Choose genres</Accordion.Header>
                <Accordion.Body>
                    {genresList}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}