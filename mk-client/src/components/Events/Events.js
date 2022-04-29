import { useState, useEffect } from 'react';
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

  const [fallEvents, setFallEvents] = useState([])
  const [winterEvents, setWinterEvents] = useState([])
  const [springEvents, setSpringEvents] = useState([])

  useEffect(()=>{
    const getEvents = async() =>{
      const data = await fetch('http://localhost:3000/events')
      const newEvents = await data.json()
      const events = newEvents.events


      events.forEach(event => {
        if (event.quarter==='Fall'){
          setFallEvents([...fallEvents, event])
        }else if (event.quarter==='Winter'){
          setWinterEvents(...[winterEvents, event])
        }else if(event.quarter==='Spring'){
          setSpringEvents([...springEvents, event])
        }
        
      });
      console.log(fallEvents)
    }
    getEvents()
    console.log(fallEvents)
    
  },[])
    return(
      <div>
        <div className="fallq">
          <h1 className="title">Fall Quarter</h1>
          {fallEvents.map((user, i)=>{
            return <EventCard
                    key={i}
                    title={fallEvents[i].title} 
                    time={fallEvents[i].time} 
                    place={fallEvents[i].place} 
                    date={fallEvents[i].date} 
                    day={fallEvents[i].day}
                    />
          })}
        </div>
        <div className="winterq">
          <h1 className="title"> Winter Quarter</h1>
          {winterEvents.map((user, i)=>{
            return <EventCard
                    key={i}
                    title={winterEvents[i].title} 
                    time={winterEvents[i].time} 
                    place={winterEvents[i].place} 
                    date={winterEvents[i].date} 
                    day={winterEvents[i].day}
                    />
          })}
        </div>
        <div className="springq">
          <h1 className="title"> Spring Quarter</h1>
          {springEvents.map((user, i)=>{
            return <EventCard
                    key={i}
                    title={springEvents[i].title} 
                    time={springEvents[i].time} 
                    place={springEvents[i].place} 
                    date={springEvents[i].date} 
                    day={springEvents[i].day}
                    />
          })}
        </div>

      </div>
    )
}

export default Events;