import './Board.css';
import sample from '../../images/sample.png';
import BoardCard from '../BoardCard/BoardCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';




function Board(){

  return(
    <>
      <div className="featured">
        <div className="feature-image-container">
          <img src={sample} className='photo'></img>
        </div>
        <div className='about-container'>
          <h1 className='position'>President</h1>
          <h2 className='name'>Harrah Luna</h2>
          <h3 className='year'>4th Year NPB Major</h3>
          <h3 className='pronouns'>She/Hers</h3>
          <p className='bio'>With the likelihood of school resuming in-person for this upcoming school year, I strive to transition everyone back into the community through highly emphasizing safe spaces filled with healing and love. I believe that especially during a time of heightened mental health issues, the need for community support is essential to retain our community members both academically and mentally. 
          To the community: Although at times it may be difficult to keep yourself afloat, I will always be here as a friend to carry some of your burdens. Lmk if there’s anything I could do for you, and I will do anything within my capacity to be the person you need.</p>
          <div className='links'>
            <a href='https://www.instagram.com/' target="_blank" className='link'>
              <i class="fa fa-instagram"></i>
            </a>
            <a href='https://www.facebook.com/' target="_blank" className='link'>
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href='mailto:emailhere@xyz.com' className='link'>
              <FontAwesomeIcon icon={faEnvelope} /> 
            </a>
          </div>
        </div>
      </div>




      <div className="board-container">
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
        <BoardCard/>
      </div>

    </>
  )
}

export default Board;