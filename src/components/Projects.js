import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  ProjectCard  from './ProjectCard'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

import testImg from "../assets/imgs/test-img.png"
import sportsHub from "../assets/imgs/project-imgs/SportsHub.PNG"
import cscb20 from '../assets/imgs/project-imgs/CSCB20.PNG'


function Projects() {

    const projects = [
        {
            title: 'Sports Hub',
            description: "Sports Hub is an android app developed using Android Studio to help users create, join, and track sports events happening at different venues. The app uses Firebase for data storage and user authentication. It was developed as the final project for the course CSCB07 at UofT.",
            imgUrl: sportsHub,
            gitHub: "https://github.com/qin2500/Sports-Hub-CSCB07-Project",
            hasLink: false,
            projectLink: "",
            

        },
        {
            title: 'Project 2',
            description: "Penis",
            imgUrl: testImg,
            hasLink: true
        },
        {
            title: 'Course Website',
            description: 'This website is developed to host course information about UofT\'s CSCB20 course as well as facilitate comunication between Professors and students.',
            imgUrl: cscb20,
            gitHub: "https://github.com/qin2500/CSCB20-Website",
            hasLink: true,
            projectLink:"https://klein-anthony-ethan-b20-site.herokuapp.com/sign_in"
        },
        {
            title: 'Project 2',
            description: "Penis",
            imgUrl: testImg,
            hasLink: true
        },
        {
            title: 'Project 2',
            description: "Penis",
            imgUrl: testImg,
            hasLink: false
        },
        {
            title: 'Project 2',
            description: "Penis",
            imgUrl: testImg,
            hasLink: false
        },
        {
            title: 'Project 2',
            description: "Penis",
            imgUrl: testImg,
            hasLink: false
        }
    ];

  return (
    <div className="projects" id="Projects">
        <Container className="projectsContainer">
            <Row>
                <Col>
                    <h2>My Projects</h2>
                    <p>Here's an ever growing collection of projects I've worked on in the past.</p>
                </Col>
            </Row>
            <Row>
            
                {
                    projects.map((project, index) => {
                        return(
                            <ProjectCard key={index} {...project}/>
                        )
                    })
                }
            </Row>
        </Container>
    </div>
  )
}

export default Projects