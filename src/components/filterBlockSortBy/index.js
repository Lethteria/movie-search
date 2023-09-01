import React, {useState} from "react";
import styles from "./filterBlockSortBy.module.scss"
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {setSearchParam} from "../../app/reducers/searchParamSlice";

import clsx from 'clsx';

function SortButton(props){
    const {id, activeId, onClick, children} = props;
    return (
        <Button variant = {(activeId === id) ? "primary" : "outline-primary"}
                size="sm"
                id={id}
                className={clsx({[styles.active]:(activeId === id)})}
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

    const activeId = useSelector((state) => state.searchParam.data.sortBy);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    function onClickSortByBtn(e){
        let sortBy = e.target.id;
        dispatch(setSearchParam({sortBy: sortBy}))
        setIsOpen(!isOpen)
    }

    return(
        <div className={styles.wrap}>
            <p>Sort results</p>

            <div className={clsx(styles.buttonWrap,
                                {[styles.open]: isOpen}
                            )}
            >
                <div className={styles.buttonContainer}>
                    {sortBtnArr.map((item) => (
                        <SortButton id={item.id}
                                    activeId={activeId}
                                    onClick={onClickSortByBtn}
                                    key={item.id}>
                            {item.text}
                        </SortButton>
                    ))}
                </div>

            </div>

        </div>
    )
}