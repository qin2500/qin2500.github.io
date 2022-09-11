import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {useState} from'react';
import 'animate.css'
import TrackVisibility from 'react-on-screen';

{/* <TrackVisibility>
{({ isVisible }) => 
  <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>

  </div>
}
</TrackVisibility> */}

function banner() {

  return (
    <div className="banner" id='Home'>
      
        <Row className="align-items-center">
          
            <Col xs={12} md={6} xl={7}>

                <TrackVisibility once>
                {({isVisible}) => 
                  <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                   <div className={isVisible ? "" : "no-opacity"}>
                      <h1>Hi, I'm Anthony Qin</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum laboriosam eligendi voluptatibus dolor nesciunt praesentium, quisquam odit, beatae numquam aliquam, quibusdam voluptate veritatis odio velit ipsam ratione minima ad vel maiores eius id. Itaque molestias voluptatum corrupti ullam voluptate maiores fugit mollitia, autem soluta cupiditate magnam, laboriosam, omnis debitis harum! </p>
                    <a href="mailto:qin2500@gmail.com" target="_blank">
                      <button className="vvd" > 
                          <span className="button-text">Contact Me</span>
                          <span className="button-helper"></span>
                      </button>
                    </a>
                  </div>
                 </div>
                
                
                }
          
                  
                
                {/* <span className="tagline"> Welcome to my portfolio</span> */}           
                </TrackVisibility>
            </Col>
            
        </Row>

    </div>
  )
}

export default banner
