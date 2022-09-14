import React from 'react'
import { Row, Col} from 'react-bootstrap'
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
                    <p>A second-year undergraduate at the University of Toronto studying Computer Science specializing in Software Engineering. I aspire for a career where I can develop engaging software and channel my creativity by solving problems in intresting ways. Currently, I am looking for co-op opportunities for the upcoming 2023 winter term. When I'm not at the computer, I enjoy snwoboarding, biking, and playing card games with my friends.</p>
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
