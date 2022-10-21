import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';

import 'animate.css'
import TrackVisibility from 'react-on-screen';

import gitHub from '../assets/imgs/github.svg';
import linkedIn from '../assets/imgs/linkedin.svg';
import devpost from '../assets/imgs/devpost.svg';

import resume from '../assets/downloads/resume.pdf'; 

var not_seen = true;
function NavBar() {
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

    <TrackVisibility>
        {({ isVisible }) => 
        <div className={poo(isVisible)}>
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ""} id='navbar'>
                <Container>
                <Navbar.Brand href="#home">
                    {/* <img src="" alt="logo"></img> */}
                    <span>Anthony Qin</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home" className="navbar-link">Home</Nav.Link>
                        {/* <Nav.Link href="#skills" className="navbar-link">Skills</Nav.Link> */}
                        <Nav.Link href="#Projects" className="navbar-link">Projects</Nav.Link>

                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/qin2500?tab=repositories" target="_blank" rel="noopener noreferrer"> <img src={gitHub} alt="gitHub" /> </a>
                            <a href="https://cn.linkedin.com/in/anthony-qin-719ba1207/" target="_blank" rel="noopener noreferrer"> <img src={linkedIn} alt="linkedin" /> </a>
                            <a href="https://devpost.com/qin2500?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer"> <img className="devpost" src={devpost} alt="devpost" /> </a>

                        </div>
                        <a href={resume} target="_blank" rel="noopener noreferrer"><button className="vvd"><span className="button">Resume</span></button></a>
                    </span>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        }
    </TrackVisibility> 
    
    
  );
}

function poo (piss){
    if((piss && not_seen))
    {
        not_seen = false;
        return "animate__animated animate__fadeInDown animate__delay-1s"
    }
    else return ""
}

export default NavBar;
