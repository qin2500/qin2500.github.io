import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import gitHub from '../assets/imgs/github.svg';
import linkedIn from '../assets/imgs/linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="social-icon">
                  <a href="https://github.com/qin2500?tab=repositories" target="_blank" rel="noopener noreferrer"> <img src={gitHub} alt="gitHub" /> </a>
                  <a href="https://cn.linkedin.com/in/anthony-qin-719ba1207/" target="_blank" rel="noopener noreferrer"> <img src={linkedIn} alt="linkedin" /> </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer