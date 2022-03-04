import react from "react";
import './Events.css'
import EventCard from '../EventCard/EventCard'

function Events () {
  const info = [
    {
      "title": "MK General Meeting",
      "time": "7-9pm",
      "date": "Oct 2",
      "day": "Wed",
      "place": "123 Science Lec Hall"
    }
  ]
    return(
      <div>
        <div className="fallq">
          <h1 className="title">Fall Quarter</h1>
          <EventCard title={info[0].title} time={info[0].time} place={info[0].place} date={info[0].date} day={info[0].day}/>
        </div>
        <div className="winterq">
          <h1 className="title"> Winter Quarter</h1>
        </div>
        <div className="springq">
          <h1 className="title"> Spring Quarter</h1>
        </div>

      </div>
    )
}

export default Events;