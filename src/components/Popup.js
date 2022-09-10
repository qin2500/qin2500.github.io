import React from 'react'
import x from '../assets/imgs/x.svg'
import { useEffect, componentDidMount } from 'react'

function Popup(props) {    
    
  useEffect(() => {
      if(props.isActive)
      {
        document.body.style.overflow = 'hidden';
        var popupElement = document.getElementById('popup');
        popupElement.style.animation = 'visible';
        popupElement.style.animationDuration = '0.5s';
        popupElement.style.animationFillMode = 'forwards';

      } 
  }, [props.isActive]);

  return (props.isActive) ? (
    <div className="popup" id='popup'>
        <div className="popup-inner" >
            <button className="close-button" onClick={() => {props.setTrigger(false); document.body.style.overflow = 'initial';
                    var popupElement = document.getElementById('popup');
                    setTimeout(function() {
                      
                      popupElement.style.animation = 'notVisible';
                      popupElement.style.animationDuration = '0.5s';
                      popupElement.style.animationFillMode = 'forwards';},500);
                    }}>
                <img className="x-icon" src={x}/>
            </button>
            { props.children }

        </div>
    </div>
  ) : "";
}

export default Popup