import react from "react";
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/mkWhite.png';

function Popup(props){
  
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-container">
        <FontAwesomeIcon icon={faXmark} className='fa-times' onClick={() => props.setTrigger(false)}/>
        {props.children}
        <div className="logo-container">
          <img src={logo} className='logo'></img>
        </div>
      </div>      
 
    </div>
  ) : "";
}

export default Popup;