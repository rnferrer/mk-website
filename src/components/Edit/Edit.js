import './Edit.css'
import {useState, useEffect} from 'react'
import EditCard from '../EditCard/EditCard'
import Popup from '../Popup/Popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BASE_URL} from '../../config' 

function Edit(){

  const [events, setEvents] = useState([])
  const [members, setMembers] = useState([])
  const [currentEdit, setCurrentEdit] = useState('events')
  const [boardTrigger, setBoardTrigger] = useState(false)
  const [eventTrigger, setEventTrigger] = useState(false)
  const [currentQuarter, setCurrentQuarter]= useState('none')

  useEffect(()=>{
    const getEvent = async() =>{
      const data = await fetch(`${BASE_URL}/edit`)
      const newEvents = await data.json()
      
      setEvents(newEvents.events)
      setMembers(newEvents.members)
    }
    getEvent()
    
  },[])

  const dayToString = (day) =>{
    switch(day){
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
         day = "Tues";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thurs";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
    }
    return day
  }

  const handleEdit = (e) =>{
    setCurrentEdit(e.target.value)
  }

  const handleQuarter = (e) => {
    setCurrentQuarter (e.target.value)
  }

  const handleNewEvent = async(event) => {
    event.preventDefault()
    const day = new Date(event.target.date.value)
    const dayNum = day.getDay()
    const dayString = dayToString(dayNum)
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}/events`,{
      method:'post',
      headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`},
      body: JSON.stringify({
        title: event.target.title.value,
        location: event.target.location.value,
        time: event.target.time.value,
        date: event.target.date.value.slice(5),
        day: dayString,
        quarter: currentQuarter
      })
    })
    setEventTrigger(false)
  }

    //Authorization : Bearer token

  const handleNewBoard = async(event) =>{
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}/boards`, {
      method:'post',
      headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`},
      body: JSON.stringify({
        name: event.target.name.value,
        position: event.target.position.value,
        pronouns: event.target.pronouns.value,
        year: event.target.year.value,
        major: event.target.major.value,
        bio: event.target.bio.value,
        instagram: event.target.ig.value,
        facebook: event.target.fb.value,
        email: event.target.email.value
      })
    })
    setBoardTrigger(false)
  }

  return(
    <div className='edit-tab-container'>
      <div className='option-container'>
        <label className='choose-edit-label'>Choose which to edit: </label>
        <select onChange={handleEdit} className='select-menu'>
          <option value='events'>Events</option>
          <option value='board'>Board</option>
        </select>
      </div>
      <div className='edit-container'>
        { (currentEdit==='events')
          ?events.map((event,i)=>{
            return(          
            <EditCard
              key={i}
              id={event._id}
              title={event.title}
              time={event.time}
              place={event.location}
              date={event.date}
              day={event.day}
              quarter={event.quarter}
              currentEdit={currentEdit}/>)
          })

          :members.map((member,i)=>{
            return(          
            <EditCard
              key={i}
              id={member._id}
              name={member.name}
              position={member.position}
              pronouns={member.pronouns}
              year={member.year}
              major={member.major}
              bio={member.bio}
              ig={member.instagram}
              fb={member.facebook}
              email={member.email}
              currentEdit={currentEdit}/>)
          })
        }
      </div>
      { (currentEdit==='events')
        ?<>
          <div className='add-button' onClick={()=>setEventTrigger(true)}>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
             <p>Add Event</p>
          </div>
          
          <Popup trigger={eventTrigger} setTrigger={setEventTrigger}>
            <div className='edit-popup-container'>
              <form className='form-container' onSubmit={handleNewEvent}>
                <label className='edit-label'>Title: </label>
                <input className='edit-input' name="title" placeholder='Enter title'></input>
                <label className='edit-label'>Location: </label>
                <input className='edit-input' name="location" placeholder='Enter location'></input>
                <label className='edit-label'>Time: </label>
                <input className='edit-input' name="time" placeholder='Enter time'></input>
                <label className='edit-label'>Date: </label>
                <input type='date' name="date" className='edit-input'></input>
                <label className='edit-label'>Quarter:</label>
                <select className='edit-input' onChange={handleQuarter}>
                  <option>Select One</option>
                  <option>Fall</option>
                  <option>Winter</option>
                  <option>Spring</option>
                </select>
                <div>
                  <button type='submit' className='save-button'>Add</button>
                  <button className='save-button' onClick={()=>setEventTrigger(false)}>Cancel</button>
              </div>
              </form>

            </div>
          </Popup>
        </>
        :<>
          <div className='add-button' onClick={()=>setBoardTrigger(true)}>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
             <p>Add Board Member</p>
          </div>
          <Popup trigger={boardTrigger} setTrigger={setBoardTrigger}>
            <div className='edit-popup-container'>
              <form className='form-container' onSubmit={handleNewBoard}>
                <label className='edit-label'>Name: </label>
                <input className='edit-input' name='name' placeholder='Enter first and last name'></input>
                <label className='edit-label'>Position: </label>
                <input className='edit-input' name='position' placeholder='Enter board position'></input>
                <label className='edit-label'>Pronouns: </label>
                <input className='edit-input' name='pronouns' placeholder='Enter pronouns (i.e., he/him, she/her, etc.)'></input>
                <label className='edit-label'>Year: </label>
                <input className='edit-input' name='year' placeholder='Enter year (i.e., 1st year, 2nd year etc.)'></input>
                <label className='edit-label'>Major: </label>
                <input className='edit-input' name='major' placeholder='Enter Major'></input>
                <label className='edit-label'>Bio: </label>
                <textarea className='edit-input bio-input' name='bio' placeholder='Max length is 1400 characters' rows='5' maxLength='1400'></textarea>
                <label className='edit-label'>Instagram: </label>
                <input className='edit-input' name='ig' placeholder='Enter Instagram URL'></input>
                <label className='edit-label'>Facebook: </label>
                <input className='edit-input' name='fb' placeholder='Enter Facebook URL'></input>
                <label className='edit-label'>email: </label>
                <input className='edit-input' name='email' placeholder='Enter email address'></input>
                <div>
                  <button type='submit' className='save-button'>Add</button>
                  <button className='save-button' onClick={()=>setBoardTrigger(false)}>Cancel</button>
              </div>
              </form>


            </div>
          </Popup>
        </>

      }
      
    </div>
  )
}

export default Edit;