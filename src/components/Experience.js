import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Styles/Experience.css'

function Experience() {
  return (
    <div className="experience" id="Experience">
        <Container className="experienceContainer">
            <Row>
                <Col>
                    <h2>Work Experience</h2>
                </Col>
            </Row>
            <Row>                
                <div className="job">
                    <h3>Full Stack Engineer Co-op <span className="company">@Manulife</span></h3>
                    <p className="timeRange">January - April 2023</p>
                    <div className="jobInfo">
                        <p>Built a fullstack internal dashboard application from scratch using Spring Boot and React.js, greatly improving the collaboration between different departments.</p>    
                        <p>Provided application support on existing projects by configuring servers using Putty, insuring that the application is running smoothly when needed.</p>
                        <p>Assisted with development of automation scripts using PowerShell and C, dramaticly improving the efficiency of my team.</p>
                    </div>                  
                </div>
            </Row>
        </Container>

    </div>
  )
}

export default Experience