import { useState } from 'react';
import './Board.css';
import sample from '../../images/sample1.png';
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
      "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Facilisi etiam dignissim diam quis. Aliquet nibh praesent tristique magna sit amet purus. Odio tempor orci dapibus ultrices in. Neque aliquam vestibulum morbi blandit cursus. Duis at consectetur lorem donec massa sapien faucibus et. Sollicitudin ac orci phasellus egestas. Facilisi cras fermentum odio eu feugiat. Semper feugiat nibh sed pulvinar. Viverra vitae congue eu consequat ac felis donec. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Eget nunc scelerisque viverra mauris in. Quam elementum pulvinar etiam non quam lacus. Quis hendrerit dolor magna eget est lorem. Vel quam elementum pulvinar etiam non quam lacus. Egestas diam in arcu cursus euismod quis viverra nibh. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Ac ut consequat semper viverra nam libero justo laoreet. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nunc vel risus commodo viverra maecenas. Ipsum dolor sit amet consectetur. Morbi tristique senectus et netus et malesuada fames ac turpis. Lorem ipsum dolor sit amet. Vivamus arcu felis bibendum ut. Neque viverra justo nec ultrices. Mattis enim ut tellus elementum sagittis vitae. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Mi bibendum neque egestas congue quisque egestas diam in arcu. Placerat in egestas erat imperdiet sed euismod. Id volutpat lacus laoreet non. Congue quisque egestas diam in arcu cursus euismod quis viverra. Vulputate mi sit amet mauris commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Diam donec adipiscing tristique risus nec feugiat in fermentum. Iaculis nunc sed augue lacus. Duis ut diam quam nulla porttitor massa id neque. Neque gravida in fermentum et sollicitudin ac. Molestie ac feugiat sed lectus. Id faucibus nisl tincidunt eget nullam non nisi est. Cursus eget nunc scelerisque viverra mauris in aliquam. Nisl nunc mi ipsum faucibus vitae. Netus et malesuada fames ac turpis egestas integer eget aliquet. Felis donec et odio pellentesque diam. Arcu cursus vitae congue mauris. Turpis egestas maecenas pharetra convallis posuere. Eu lobortis elementum nibh tellus molestie nunc non.",
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

  const [currentMember, setCurrentMember] = useState(members[0]);

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
          key={boardMember.name}
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