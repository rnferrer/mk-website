import flyer from '../../images/flyer.jpg';
import './BoardCard.css'

function BoardCard (props){
  return(
    <div className='boardcard-container'>
      <div className="board-image-container">
        <img src={flyer} className='board-image'></img>
      </div>
      <h3 className='boardcard-position'>{props.position}</h3>
      <p className='boardcard-name'>{props.name}</p>
    </div>
  )
}

export default BoardCard;