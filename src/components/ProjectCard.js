import React from 'react'
import { useState } from 'react';
import {Col} from 'react-bootstrap'
import magnifyingGlass from'../assets/imgs/magnifying-glass.svg'
import Popup from './Popup.js'

function ProjectCard( {title, description, imgUrl, hasLink, gitHub, projectLink, downloadLink} ) {
  const [popupActive, setPopupActive] = useState(false);

  
  return (
        <Col sm={6} md={4}>
            

          <div className="projectcard" onClick={() => { setPopupActive(true);}}>
              <img className="projectImage" src={imgUrl} prop="u mum gey"/>
              <div className="projectText">
                  <h4>{title}</h4>
                  {/* <span>{description}</span> */}
                  <img className="mag-icon" src={magnifyingGlass} prop="u mum gay"/>
              </div>
          </div>
          <Popup isActive={popupActive} setTrigger = {setPopupActive} scrollx = {window.scrollX} scrolly = {window.scrollY}>
            <div className="popup-content">
                <div className="popup-title">
                    <h4>{title}</h4>
                </div>
                <Col lg={20} md={20} className="popup-image-container">
                    <img className="popup-image" src={imgUrl} />
                </Col>
                         
                <div className={description.length > 80 ? "popup-text-long" : "popup-text"}>
                    <p>{description}</p>
                </div>
                <span className="popup-buttons">
                    {hasLink && <a href={projectLink} target="_blank" rel="noopener noreferrer"><button >Project Link</button></a>}
                    {downloadLink && <a href={downloadLink} download ><button >Download Link</button></a>}
                    <a href={gitHub} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                </span>
                
            </div>
              
          </Popup>
      </Col>
      
    
  )
}

export default ProjectCard