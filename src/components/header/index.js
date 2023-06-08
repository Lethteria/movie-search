import React from "react";
import styles from "./header.module.scss";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import {MdFavorite} from "react-icons/md";

export default function Header(){
    return(
        <header className={styles.wrap}>
            <Navbar>
                <Container>

                    <Navbar.Brand href="#">Logo</Navbar.Brand>

                    <a href="#" className={styles.link}>
                        <span>Favorite</span>
                        <MdFavorite />
                    </a>

                </Container>
            </Navbar>
        </header>
    )
}