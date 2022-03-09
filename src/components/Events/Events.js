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
      "place": "123 Science Lec Hall",
    },
    {
      "title": "BSLS Reveal",
      "time": "8pm",
      "date": "Oct 27",
      "day": "Friday",
      "place": "Hutchinson Parking Structure",
    },
    {
      "title": "PCN Symposium",
      "time": "8pm",
      "date": "Nov 7",
      "day": "Friday",
      "place": "Wellman 1",
    },
    {
      "title": "Friendship Games",
      "time": "8pm",
      "date": "Oct 15-Oct 16",
      "day": "Sat-Sun",
      "place": "CSU Fullerton",
    },
    {
      "title": "FATDs",
      "time": "8pm",
      "date": "Sep 30",
      "day": "Friday",
      "place": "Davis Elementary School",
    }
  ]
    return(
      <div>
        <div className="fallq">
          <h1 className="title">Fall Quarter</h1>
          {info.map((user, i)=>{
            return <EventCard
                    title={info[i].title} 
                    time={info[i].time} 
                    place={info[i].place} 
                    date={info[i].date} 
                    day={info[i].day}
                    />
          })}
        </div>
        <div className="winterq">
          <h1 className="title"> Winter Quarter</h1>
          {info.map((user, i)=>{
            return <EventCard
                    title={info[i].title} 
                    time={info[i].time} 
                    place={info[i].place} 
                    date={info[i].date} 
                    day={info[i].day}
                    />
          })}
        </div>
        <div className="springq">
          <h1 className="title"> Spring Quarter</h1>
          {info.map((user, i)=>{
            return <EventCard
                    title={info[i].title} 
                    time={info[i].time} 
                    place={info[i].place} 
                    date={info[i].date} 
                    day={info[i].day}
                    />
          })}
        </div>

      </div>
    )
}

export default Events;