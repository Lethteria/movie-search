import React from "react";
import styles from "./header.module.scss";

import Logo from "../logo";
import HeaderFavoriteNavLink from "../headerFavoriteNavLink";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";
import {fetchAllMoviesAsync1, setCurrentPage} from "../../app/reducers/searchSlice";

export default function Header(){

    const dispatch = useDispatch();

    function onLogoClick(){
        dispatch(setCurrentPage(1));
        dispatch(fetchAllMoviesAsync1("1"));
    }
    return(
        <header className={styles.wrap} >
            <Navbar >
                <Container>

                    <Link  to="/" className="navbar-brand" onClick={onLogoClick}>
                        <Logo className={styles.logo}/>
                    </Link>

                    <Link to="/favorite">
                        <HeaderFavoriteNavLink />
                    </Link>

                </Container>
            </Navbar>
        </header>
    )
}