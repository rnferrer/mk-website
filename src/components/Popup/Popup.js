import react from "react";
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Popup(props){
  console.log(props, props.trigger)
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-container">
        <FontAwesomeIcon icon={faXmark} className='fa-times' onClick={() => props.setTrigger(false)}/>
        {props.children}
      </div>      
 
    </div>
  ) : "";
}

export default Popup;