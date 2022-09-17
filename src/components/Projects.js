import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  ProjectCard  from './ProjectCard'
import 'animate.css'

import sportsHub from "../assets/imgs/project-imgs/SportsHub.PNG"
import cscb20 from '../assets/imgs/project-imgs/CSCB20.PNG'
import awsGame from '../assets/imgs/project-imgs/AwsomeGame.PNG'
import sportsHubAPK from "../assets/downloads/app-debug.apk"
import car from '../assets/imgs/project-imgs/car.PNG'


function Projects() {

    const projects = [
        {
            title: 'Sports Hub',
            description: "Sports Hub is an android app developed using Android Studio to help users create, join, and track sports events happening at different venues. The app uses Firebase for data storage and user authentication. It was developed as the final project for the course CSCB07 at UofT.",
            imgUrl: sportsHub,
            gitHub: "https://github.com/qin2500/Sports-Hub-CSCB07-Project",
            hasLink: false,
            projectLink: "",
            downloadLink: sportsHubAPK,
            

        },
        {
            title: 'Mesh Tool',
            description: "A small java library I made to help convert meshes between .obj, .off, and .ply formats. The above image is simply a screen-  shot of the model I used while testing as this project does not have a visual element to it.",
            imgUrl: car,
            gitHub: "https://github.com/qin2500/mesh-tool",
            hasLink: false,
        },
        {
            title: 'Course Website',
            description: 'This website is developed to host course information about UofT\'s CSCB20 course as well as facilitate communication between Professors and students.',
            imgUrl: cscb20,
            gitHub: "https://github.com/qin2500/CSCB20-Website",
            hasLink: true,
            projectLink:"https://klein-anthony-ethan-b20-site.herokuapp.com/sign_in"
        },
        {
            title: 'Anthony\'s Awesome Game',
            description: "This is a little game I made in about a week during my last year of high school. It's made purely in Java, making full use of its built-in 2D Graphics. More details can be found on its GitHub page linked below.",
            imgUrl: awsGame,
            gitHub: "https://github.com/qin2500/Anthonys-Awsome-Game",
            hasLink: false,
        },
    ];

  return (
    <div className="projects" id="Projects">
        <Container className="projectsContainer">
            <Row>
                <Col>
                    <h2>My Projects</h2>
                    <p>Here's an ever-growing collection of projects I've worked on in the past.</p>
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