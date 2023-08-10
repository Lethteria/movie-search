import React from "react";
import styles from "./header.module.scss";
import Logo from "../logo";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import {MdFavorite} from "react-icons/md";
import {useDispatch} from "react-redux";
import {fetchAllMoviesAsync1, setCurrentPage} from "../../app/reducers/searchSlice";
import {Link} from "react-router-dom";

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

                    <Link  to="/" className="navbar-brand" onClick={onLogoClick}>
                        <Logo className={styles.logo}/>
                    </Link>

                    <Link to="/favorite" className={styles.link}>
                        <span>Favorite</span>
                        <MdFavorite />
                    </Link>

                </Container>
            </Navbar>
        </header>
    )
}