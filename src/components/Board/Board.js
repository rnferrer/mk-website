import { useState } from 'react';
import './Board.css';
import sample from '../../images/flyer.jpg';
import BoardCard from '../BoardCard/BoardCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';




function Board(){


  const members = [
    {
      "id": 1,
      "name": "Harrah Luna",
      "position": "President",
      "year": "4th",
      "major": "Bio Sci",
      "pronouns": "She/Hers",
      "bio":"",
      "instagram":"https://www.instagram.com/xhcabl/",
      "facebook": "https://www.facebook.com/harrah.luna",
      "email":"president@mk.com"
    },
    {
      "id": 2,
      "name": "Nique Lee",
      "position": "Vice President",
      "year": "3rd",
      "major": "Psychology",
      "pronouns": "She/Hers",
      "bio":"",
      "instagram":"https://www.instagram.com/niksters9191/",
      "facebook": "https://www.facebook.com/harrah.luna",
      "email":"president@mk.com"
    },
    {
      "id": 3,
      "name": "Momo Ferrer",
      "position": "Secretary",
      "year": "3rd",
      "major": "Human Development",
      "pronouns": "She/Hers",
      "bio":"",
      "instagram":"https://www.instagram.com/idk.momo/",
      "facebook": "https://www.facebook.com/harrah.luna",
      "email":"president@mk.com"
    },
    {
      "id": 4,
      "name": "Christina Dimicali",
      "position": "Treasurer",
      "year": "3rd",
      "major": "Bio Sci",
      "pronouns": "She/Hers",
      "bio":"",
      "instagram":"https://www.instagram.com/chrisvtina_/",
      "facebook": "https://www.facebook.com/harrah.luna",
      "email":"president@mk.com"
    }
  ]

  const [currentMember, setCurrentMember] = useState(members[0])
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
              <i className="fa fa-instagram"></i>
            </a>
            <a href='https://www.facebook.com/' target="_blank" className='link'>
              <i className="fa fa-facebook-square"></i>
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
          name={members[i].name}
          position={members[i].position}
          />
        })}
      </div>

    </>
  )
}

export default Board;