import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {setSearchParam} from "../../app/reducers/searchSlice";

function SortButton(props){
    const {id, activeId, onClick, children} = props;
    return (
        <Button variant = {(activeId === id) ? "primary" : "outline-primary"}
                size="sm"
                id={id}
                onClick={onClick}
        >
            {children}
        </Button>
    )
}


export default function FilterBlockSortBy(){

    const sortBtnArr = [{id: "vote_average.asc", text: "rate up"},
                     {id: "vote_average.desc", text: "rate down"},
                     {id: "primary_release_date.asc", text: "release date up"},
                     {id: "primary_release_date.desc", text: "release date down"}
                    ];

    const [activeId, setActiveId] = useState('vote_average.desc');
    const dispatch = useDispatch();

    function onClickSortByBtn(e){
        let sortBy = e.target.id;
        dispatch(setSearchParam({sortBy: sortBy}))
        setActiveId( sortBy )
    }


    return(
        <>
            Sort results

            <div>
                {sortBtnArr.map((item) => (
                    <SortButton id={item.id}
                                activeId={activeId}
                                onClick={onClickSortByBtn}
                                key={item.id}>
                        {item.text}
                    </SortButton>
                ))}
            </div>

        </>
    )
}