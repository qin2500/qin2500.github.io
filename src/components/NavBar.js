import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';

import gitHub from '../assets/imgs/github.svg';
import linkedIn from '../assets/imgs/linkedin.svg';

function NavBar() {
    const [activeLink, setactiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else setScrolled(false);
        }

        window.addEventListener("scroll", onScroll);
    }, []);

    


  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
        <Container>
        <Navbar.Brand href="#home">
            {/* <img src="" alt="logo"></img> */}
            <span>Anthony Qin</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
                <Nav.Link href="#skills" className="navbar-link">Skills</Nav.Link>
                <Nav.Link href="#Projects" className="navbar-link">Projects</Nav.Link>

            </Nav>

            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://github.com/qin2500?tab=repositories" target="_blank"> <img src={gitHub} alt="gitHub" /> </a>
                    <a href="https://cn.linkedin.com/in/anthony-qin-719ba1207/" target="_blank"> <img src={linkedIn} alt="linkedin" /> </a>
                </div>
                <button className="vvd"><span className="button">Resume</span></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;
