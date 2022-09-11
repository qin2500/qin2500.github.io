import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  ProjectCard  from './ProjectCard'
import testImg from "../assets/imgs/test-img.png"

function Projects() {

    const projects = [
        {
            title: 'Project 1',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatibus mollitia beatae fugiat temporibus laudantium cumque deleniti vitae, cupiditate omnis!",
            imgUrl: testImg,
            hasLink: true
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum tenetur maiores, animi laborum sint a corporis voluptatem quisquam modi. Rem ratione debitis possimus aut similique perferendis cupiditate facilis reprehenderit tenetur molestias ipsa a, eveniet nihil minima voluptatibus fugiat necessitatibus ullam! Similique, officiis. Consequatur nesciunt impedit laboriosam, sapiente rerum aliquid molestias aliquam ea, cupiditate fugiat beatae officia autem, suscipit iste. Eos earum deserunt corrupti laboriosam nisi? Velit deleniti laborum doloribus molestias architecto rerum vitae, ducimus quod ratione sequi! Fuga expedita, in ipsa illo iste asperiores vero deserunt voluptatem laborum dolores consequuntur commodi. Iusto possimus suscipit repellat itaque. Quia, itaque dolores!',
            imgUrl: testImg,
            hasLink: true
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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, error? Soluta quos impedit doloremque magni! Eius cumque illum a aut.</p>
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