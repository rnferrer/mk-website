import { useState, useEffect } from 'react';
import './Board.css';
import sample from '../../images/flyer2.jpg';
import BoardCard from '../BoardCard/BoardCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {BASE_URL} from '../../config' 


function Board(){

const [members, setMembers] = useState([])
const [currentMember, setCurrentMember] = useState({});

useEffect(()=>{
    const getBoard = async() =>{
      const data = await fetch(`${BASE_URL}/board`)
      const newMembers = await data.json()
      if (newMembers.length === 0){
        setMembers([])
        setCurrentMember({})

      }else{
        setMembers(newMembers)
        setCurrentMember(newMembers[0])
      }

    }
    getBoard()
    
  },[])



  const handleChangeCurrent = (newName) => {
    const found = members.find((member)=> member.name===newName)
    console.log(found)
    setCurrentMember(found)
  }

  return(
    <>
      <div className="featured">
        <div className="feature-image-container">
          <img src={sample} className='photo'></img>
        </div>
        <div className='about-container'>
          <h1 className='position'>{currentMember.position}</h1>
          <h2 className='name'>{currentMember.name}</h2>
          <h3 className='year'>{currentMember.year}</h3>
          <h3 className='pronouns'>{currentMember.pronouns}</h3>
          <p className='bio'>{currentMember.bio}</p>
          <div className='links'>
            <a href={currentMember.instagram} target="_blank" className='link'>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href='https://www.facebook.com/' target="_blank" className='link'>
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a href='mailto:emailhere@xyz.com' className='link'>
              <FontAwesomeIcon icon={faEnvelope} /> 
            </a>
          </div>
        </div>
      </div>


      <div className="board-container">
        {members.map((boardMember, i)=>{
          return <BoardCard
          key={boardMember._id}
          name={boardMember.name}
          position={boardMember.position}
          setName={handleChangeCurrent}
          />
        })}
      </div>

    </>
  )
}

export default Board;