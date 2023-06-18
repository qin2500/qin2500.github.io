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
                    <p>A third-year Computer Science student specializing in Software Engineering at the University of Toronto. I'm passionate about creating engaging software solutions and tackling problems with a creative twist. Currently seeking a Summer 2024 internship opportunity. So, let's connect and build something amazing together! When I'm not coding, you'll find me snowboarding, biking, or enjoying card games with friends.</p>
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
