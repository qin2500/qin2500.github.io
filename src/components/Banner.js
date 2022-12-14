import React from 'react'
import { Row, Col} from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen';


function banner() {

  return (
    <div className="banner" id='Home'>
      
        <Row className="align-items-center">
          
            <Col xs={12} md={6} xl={7}>

                <TrackVisibility once>
                {({isVisible}) => 
                  <div className={"animate__animated animate__fadeInDown"}>
                   <div >
                      <h1>Hi, I'm Anthony Qin</h1>
                    <p>A second-year undergraduate at the University of Toronto studying Computer Science specializing in Software Engineering. I aspire for a career where I can develop engaging software and channel my creativity by solving problems in interesting ways. Currently, I have a co-op position at Manulife from January to April of 2023 but I am always intrested in future opportunities so feel free to reach out. When I'm not at the computer, I enjoy snowboarding, biking, and playing card games with my friends.</p>
                    <a href="mailto:anthony.qin@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">
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
