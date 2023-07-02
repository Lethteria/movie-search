import React from "react";
import styles from "./header.module.scss";
import Logo from "../logo";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import {MdFavorite} from "react-icons/md";
import {useDispatch} from "react-redux";
import {fetchAllMoviesAsync1, setCurrentPage} from "../../app/reducers/searchSlice";

export default function Header(){

    const dispatch = useDispatch();

    function onLogoClick(){
        dispatch(setCurrentPage(1));
        dispatch(fetchAllMoviesAsync1("1"));
    }
    return(
        <header className={styles.wrap}>
            <Navbar>
                <Container>

                    <Navbar.Brand href="#"
                                  onClick={onLogoClick}
                    >
                        <Logo className={styles.logo}/>
                    </Navbar.Brand>

                    <a href="#" className={styles.link}>
                        <span>Favorite</span>
                        <MdFavorite />
                    </a>

                </Container>
            </Navbar>
        </header>
    )
}