import React from "react";
import styles from "./searchBlock.module.scss";
import Title from "../title";
import {Nav} from "react-bootstrap";
import {NavLink, Outlet} from "react-router-dom";

export default function SearchBlock(){

    return(
        <div className={styles.wrap}>

            <Title>Find the movie</Title>

            <Nav variant="tabs" className={styles.tabWrap} >

                <Nav.Item className={styles.tabItem}>
                    <NavLink to="/" className="nav-link">
                            Search by title
                    </NavLink>
                </Nav.Item>

                <Nav.Item className={styles.tabItem}>
                    <NavLink to="/filters" className="nav-link">
                            Use filters
                    </NavLink>
                </Nav.Item>
            </Nav>

            <Outlet />

        </div>
    )
}
