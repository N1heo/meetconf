import React from 'react';
import classes from "./Navbar.module.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from './img/logo_w.svg';


export function Navbar(props) {
    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.navbar_inner}>
                    <Nav className={classes.logo}>
                        <Nav.Item>
                            <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav className={classes.sections}>
                        <Nav.Item className={classes.section}>
                            <Link className={classes.navlink} to="meets" smooth={true} duration={500} offset={-70}>Meets</Link>
                        </Nav.Item>
                        <Nav.Item className={classes.section}>
                            <Link className={classes.navlink} to="gallery" smooth={true} duration={500} offset={-70}>Gallery</Link>
                        </Nav.Item>
                        <Nav.Item className={classes.section}>
                            <NavLink className={classes.navlink} to='/archive'>Archive</NavLink>
                        </Nav.Item>
                        <Nav.Item className={classes.section}>
                            <NavLink className={classes.navlink} to='/program'>Program</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    );
}
