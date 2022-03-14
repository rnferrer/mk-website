import flyer from '../../images/flyer.jpg';
import './BoardCard.css'

function BoardCard (){
  return(
    <div className='boardcard-container'>
      <div className="board-image-container">
        <img src={flyer} className='board-image'></img>
      </div>
      <h3 className='boardcard-position'>Secretary</h3>
      <p className='boardcard-name'>Momo Ferrer</p>
    </div>
  )
}

export default BoardCard;