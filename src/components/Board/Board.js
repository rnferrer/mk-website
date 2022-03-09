import './Board.css';
import sample from '../../images/sample.png';

function Board(){

  return(
    <>
      <div className="featured">
        <div className="image-container">
          <img src={sample} className='photo'></img>
        </div>
        <div className='about-container'>
          <h1 className='meet'>Meet Our</h1>
          <h2 className='position'>President Harrah Luna</h2>
          <h2 className='year'>4th Year NPB Major</h2>
          <h3 className='pronouns'>She/Hers</h3>
          <p className='bio'>With the likelihood of school resuming in-person for this upcoming school year, I strive to transition everyone back into the community through highly emphasizing safe spaces filled with healing and love. I believe that especially during a time of heightened mental health issues, the need for community support is essential to retain our community members both academically and mentally. 
          To the community: Although at times it may be difficult to keep yourself afloat, I will always be here as a friend to carry some of your burdens. Lmk if there’s anything I could do for you, and I will do anything within my capacity to be the person you need.</p>




        </div>
      </div>
      <div className="board-container">

      </div>

    </>
  )
}

export default Board;