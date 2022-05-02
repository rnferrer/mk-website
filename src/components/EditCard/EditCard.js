import './EditCard.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from '../Popup/Popup'

const fillertext = 'MK general meeting'

function EditCard(props){
  const [editTrigger, setEditTrigger] = useState(false)
  const [removeTrigger, setRemoveTrigger] = useState(false)
  const [currentQuarter, setCurrentQuarter]= useState(props.quarter)

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

  const handleQuarter = (e) => {
    setCurrentQuarter (e.target.value)
  }

  const handleEventSubmit = async (event) => {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const day = new Date(event.target.date.value) 
    const dayNum = day.getDay()
    const dayString = dayToString(dayNum)

    try{
      const editEvent = await fetch('/events',{
        method:'put',
        headers: {'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${token}`},
        body: JSON.stringify({
          id: props.id,
          title: event.target.title.value,
          location: event.target.place.value,
          time: event.target.time.value,
          date: event.target.date.value.slice(5),
          day: dayString,
          quarter: currentQuarter
        })
      })
      console.log(editEvent)
      setEditTrigger(false)
    }
    catch(e){
      console.log(e)
    }
  }

  const handleBoardSubmit = async(event) => {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    try{
      const editBoard = await fetch('/boards',{
        method:'put',
        headers: {'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${token}`},
        body: JSON.stringify({
          id: props.id,
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
      console.log(editBoard)
      setEditTrigger(false)

    }
    catch(e){
      console.log(e)
    }

  }

  const handleDelete = async () => {
    const deleteBody = {id: props.id}
    const token = window.localStorage.getItem('token')
    if (props.currentEdit === 'events'){
      const deleteEvent = await fetch ('/events' , {
        method: 'delete',
        headers: {'Content-type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${token}`},
        body: JSON.stringify(deleteBody)
      })
      setRemoveTrigger(false)
    }else{
      const deleteBoard = await fetch ('/boards' , {
        method: 'delete',
        headers: {'Content-type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${token}`},
        body: JSON.stringify(deleteBody)
      })
      setRemoveTrigger(false)
    }
  }

  return(
    <>
      <div className='editcard-container'>
        <div className='editcard-description'>
          {(props.currentEdit==='events')
            ?<>
              <h2>{props.title}</h2>
              <h3>{props.place}</h3>
              <h3>{props.date}</h3>
            </>
            :<>
              <h2>{props.name}</h2>
              <h3>{props.position}</h3>
              <h3>{props.year} year</h3>
            </>

          }


        </div>
        <div className='editcard-buttons'>
          <button className='edit-button' onClick={()=>setEditTrigger(true)}>
            Edit 
            <FontAwesomeIcon icon="fa-solid fa-pencil" className='pencil'/>
          </button>
          <button className='remove-button' onClick={()=>setRemoveTrigger(true)}>
            Remove
            <FontAwesomeIcon icon="fa-solid fa-trash-can" className='trash'/>
          </button>
        </div>
      </div>

      <Popup trigger={editTrigger} setTrigger={setEditTrigger}>
        {(props.currentEdit==='events')
            ?
            <div className='edit-popup-container' onSubmit={handleEventSubmit}>
              <form className='form-container'>
                <label className='edit-label'>Title: </label>
                <input className='edit-input' name="title" placeholder={props.title}></input>
                <label className='edit-label'>Location: </label>
                <input className='edit-input' name="place" placeholder={props.place}></input>
                <label className='edit-label'>Time: </label>
                <input className='edit-input' name="time" placeholder={props.time}></input>
                <label className='edit-label'>Date: </label>
                <input type='date' className='edit-input' name="date" placeholder={props.date}></input>
                <label className='edit-label'>Quarter:</label>
                <select className='edit-input' name='quarter' onChange={handleQuarter}>
                  <option>Fall</option>
                  <option>Winter</option>
                  <option>Spring</option>
                </select>
                <div>
                  <button type='submit' className='save-button'>Save</button>
                  <button className='save-button' onClick={()=>setEditTrigger(false)}>Cancel</button>
                </div>
              </form>

            </div>
            :
            <div className='edit-popup-container'>
              <form className='form-container' onSubmit={handleBoardSubmit}>
                <label className='edit-label'>Name: </label>
                <input className='edit-input' name='name' placeholder={props.name}></input>
                <label className='edit-label'>Position: </label>
                <input className='edit-input' name='position' placeholder={props.position}></input>
                <label className='edit-label'>Pronouns: </label>
                <input className='edit-input' name='pronouns' placeholder={props.pronouns}></input>
                <label className='edit-label'>Year: </label>
                <input className='edit-input' name='year' placeholder={props.year}></input>
                <label className='edit-label'>Major: </label>
                <input className='edit-input' name='major' placeholder={props.major}></input>
                <label className='edit-label'>Bio: </label>
                <textarea className='edit-input bio-input' name='bio' placeholder='Max length is 1400 characters' rows='5' maxLength='1400'></textarea>
                <label className='edit-label'>Instagram: </label>
                <input className='edit-input' name='ig' placeholder={props.ig}></input>
                <label className='edit-label'>Facebook: </label>
                <input className='edit-input' name='fb' placeholder={props.fb}></input>
                <label className='edit-label'>email: </label>
                <input className='edit-input' name='email' placeholder={props.email}></input>
                <div>
                  <button type='submit' className='save-button'>Save</button>
                  <button className='save-button' onClick={()=>setEditTrigger(false)}>Cancel</button>
                </div>
              </form>
            </div>

        }

      </Popup>
      <Popup trigger={removeTrigger} setTrigger={setRemoveTrigger} >
        <div className='remove-container'>
          <h3 className='remove-text'>Are you sure you want to delete this?</h3>
          <div className='answer-container'> 
            <button className='answer-button' onClick={handleDelete}>Yes</button>
            <button className='answer-button' onClick={()=>setRemoveTrigger(false)}>No</button>
          </div>

        </div>
      </Popup>
    </>
  )
}

export default EditCard;