import react, {useState} from "react";
import Popup from '../Popup/Popup'
import './EventCard.css'
import flyer from '../../images/flyer2.jpg'


//need to make it so you can only open one popup at a time




function EventCard(props) {
  const [button, setButton] = useState(false)

  return(
    <>
      <div className="card-container" onClick={()=>setButton(true)}>
        <div className="description">
          <p className="description-title">{props.title}</p>
          <p>{props.time}</p>
          <p>{props.place}</p>

        </div>
        <div className="date">
          <p>{props.day}</p>
          <p>{props.date}</p>
        </div>

      </div>
      <Popup trigger={button} setTrigger={setButton} className='popup-container'>
        <div className="flyer-container">
          <img src={flyer} className='flyer'></img>
        </div>

        <div className="popup-description">
          <p className="popup-title">{props.title}</p>
          <div className="details">
            <p>{props.place}</p>
            <p>{props.day}, {props.date}</p>
            <p>{props.time}</p>
          </div>
        </div>
      </Popup>
  </>
  )
}

export default EventCard;