import React from 'react'
import { Row, Col} from 'react-bootstrap'

function banner() {
  return (
    <div className="banner" id='home'>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                {/* <span className="tagline"> Welcome to my portfolio</span> */}
                <h1>Hi, I'm Anthony Qin</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum laboriosam eligendi voluptatibus dolor nesciunt praesentium, quisquam odit, beatae numquam aliquam, quibusdam voluptate veritatis odio velit ipsam ratione minima ad vel maiores eius id. Itaque molestias voluptatum corrupti ullam voluptate maiores fugit mollitia, autem soluta cupiditate magnam, laboriosam, omnis debitis harum! </p>
                <button className="vvd"> 
                    <span className="button-text">Contact Me</span>
                 <span className="button-helper"></span>
                </button>
            </Col>
        </Row>

    </div>
  )
}

export default banner
