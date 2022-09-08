import React from 'react'
import { useState } from 'react';
import {Col} from 'react-bootstrap'
import magnifyingGlass from'../assets/imgs/magnifying-glass.svg'
import Popup from './Popup.js'

function ProjectCard( {title, description, imgUrl, hasLink} ) {
  const [popupActive, setPopupActive] = useState(false);

  
  return (
        <Col sm={6} md={4}>
          <div className="projectcard" onClick={() => { setPopupActive(true);}}>
              <img className="projectImage" src={imgUrl}/>
              <div className="projectText">
                  <h4>{title}</h4>
                  {/* <span>{description}</span> */}
                  <img className="mag-icon" src={magnifyingGlass}/>
              </div>
          </div>
          <Popup isActive={popupActive} setTrigger = {setPopupActive} scrollx = {window.scrollX} scrolly = {window.scrollY}>
            <div className="popup-content">
                <div className="popup-title">
                    <h4>{title}</h4>
                </div>
                <Col lg={20} md={20} className="popup-image-container">
                    <img className="popup-image" src={imgUrl}  alt="project-image" />
                </Col>
                         
                <div className={description.length > 80 ? "popup-text-long" : "popup-text"}>
                    <p>{description}</p>
                </div>
                <span className="popup-buttons">
                    {hasLink && <button>Project Link</button>}
                    <button>Source Code</button>
                </span>
                
            </div>
              
          </Popup>
      </Col>
      
    
  )
}

export default ProjectCard