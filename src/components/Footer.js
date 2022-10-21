import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import resume from '../assets/downloads/resume.pdf';

import gitHub from '../assets/imgs/github.svg';
import linkedIn from '../assets/imgs/linkedin.svg';
import devpost from '../assets/imgs/devpost.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="social-icon">
                  <a href="https://github.com/qin2500?tab=repositories" target="_blank" rel="noopener noreferrer"> <img src={gitHub} alt="gitHub" /> </a>
                  <a href="https://cn.linkedin.com/in/anthony-qin-719ba1207/" target="_blank" rel="noopener noreferrer"> <img src={linkedIn} alt="linkedin" /> </a>
                  <a href="https://devpost.com/qin2500?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer"> <img className="devpost" src={devpost} alt="devpost" /> </a>
            </div>
            <span className="navbar-text">
                  <a href={resume} target="_blank" rel="noopener noreferrer"><button className="vvd"><span className="button">Resume</span></button></a>
            </span>
            
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer