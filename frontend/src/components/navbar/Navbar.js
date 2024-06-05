import React from 'react';
import classes from "./Navbar.module.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from './img/logo_w.svg';


export function Navbar(props) {
    const openArchivePdf = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/pdf-storage/archive/');
            const data = await response.json();
            const pdfFileUrl = data.results[0].pdf_file;
            if (pdfFileUrl) {
                window.open(pdfFileUrl, '_blank');
            } else {
                console.error('PDF URL is not available');
            }
        } catch (error) {
            console.error('Error opening PDF:', error);
        }
    };

    const openProgramPdf = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/pdf-storage/program/');
            const data = await response.json();
            const pdfFileUrl = data.results[0].pdf_file;
            if (pdfFileUrl) {
                window.open(pdfFileUrl, '_blank');
            } else {
                console.error('PDF URL is not available');
            }
        } catch (error) {
            console.error('Error opening PDF:', error);
        }
    };

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
                            <NavLink className={classes.navlink} onClick={openArchivePdf}>Archive</NavLink>
                        </Nav.Item>
                        <Nav.Item className={classes.section}>
                            <NavLink className={classes.navlink} onClick={openProgramPdf}>Program</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    );
}
