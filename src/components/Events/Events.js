import { useState, useEffect } from 'react';
import './Events.css'
import EventCard from '../EventCard/EventCard'
import {BASE_URL} from '../../config' 

function Events () {

  const [fallEvents, setFallEvents] = useState([])
  const [winterEvents, setWinterEvents] = useState([])
  const [springEvents, setSpringEvents] = useState([])

  useEffect(()=>{
    const getEvents = async() =>{
      const data = await fetch(`${BASE_URL}/events`)
      const newEvents = await data.json()
      const events = newEvents.events

      console.log(events)
      events.forEach(event => {
        if (event.quarter==='Fall'){
          setFallEvents(fallEvents=> [...fallEvents, event])
        }else if (event.quarter==='Winter'){
          setWinterEvents(winterEvents => [...winterEvents, event])
        }else if(event.quarter==='Spring'){
          setSpringEvents(springEvents => [...springEvents, event])
        }
        
      });
    }
    getEvents()
    
  },[])
    return(
      <div>
        <div className="fallq">
          <h1 className="title">Fall Quarter</h1>
          {fallEvents.map((event, i)=>{
            return <EventCard
                    key={i}
                    title={event.title} 
                    time={event.time} 
                    place={event.place} 
                    date={event.date} 
                    day={event.day}
                    />
          })}
        </div>
        <div className="winterq">
          <h1 className="title"> Winter Quarter</h1>
          {winterEvents.map((event, i)=>{
            return <EventCard
                      key={i}
                      title={event.title} 
                      time={event.time} 
                      place={event.place} 
                      date={event.date} 
                      day={event.day}
                    />
          })}
        </div>
        <div className="springq">
          <h1 className="title"> Spring Quarter</h1>
          {springEvents.map((event, i)=>{
            return <EventCard
                      key={i}
                      title={event.title} 
                      time={event.time} 
                      place={event.place} 
                      date={event.date} 
                      day={event.day}
                    />
          })}
        </div>

      </div>
    )
}

export default Events;
