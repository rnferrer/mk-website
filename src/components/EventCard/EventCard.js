import react, {useState} from "react";
import Popup from '../Popup/Popup'
import './EventCard.css'

function EventCard(props) {
  const [sbutton, setButton] = useState(false)

  console.log(sbutton)
  return(
    <>
      <div className="card-container" onClick={()=>setButton(true)}>
        <div className="description">
          <p className="description-title">{props.title}</p>
          <p className="">{props.time}</p>
          <p>{props.place}</p>

        </div>
        <div className="date">
          <p className="day">{props.day}</p>
          <p className="month">{props.date}</p>
        </div>

      </div>
      <Popup trigger={sbutton} setTrigger={setButton}>
        <p>Hello</p>
      </Popup>
  </>
  )
}

export default EventCard;