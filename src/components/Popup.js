import React from 'react'
import x from '../assets/imgs/x.svg'
import { useEffect, componentDidMount } from 'react'

function Popup(props) {    
    
  useEffect(() => {
      if(props.isActive)
      {
        document.body.style.overflow = 'hidden';
        document.getElementById('popup').style.opacity = '1';
      } 
  }, [props.isActive]);

  return (props.isActive) ? (
    <div className="popup" id='popup'>
        <div className="popup-inner" >
            <button className="close-button" onClick={() => {props.setTrigger(false); document.body.style.overflow = 'initial';}}>
                <img className="x-icon" src={x}/>
            </button>
            { props.children }

        </div>
    </div>
  ) : "";
}

export default Popup