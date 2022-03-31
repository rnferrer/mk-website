import './Footer.css'
import mkWhite from '../../images/mkWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Footer (){
  return(
    <div className='footer-container'>
      <div className='footer-logo-container'>
        <img src={mkWhite} alt='MK Logo'className='footer-logo'></img>
      </div>
      <div className='footer-link-container'> 
        <a href='https://discord.gg/T2uXkuHzrd' target="_blank" className='footer-link'>
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </a>
        <a href='https://www.instagram.com/mgakapatid/' target="_blank" className='footer-link'>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a href='https://www.facebook.com/MgaKapatidUCD' target="_blank" className='footer-link'>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
        <a href='mailto:emailhere@xyz.com' className='footer-link'>
          <FontAwesomeIcon icon={faEnvelope} /> 
        </a>

      </div>
      <p className='footer-text'>© 2022 Mga Kapatid • Made with 🇵🇭 Pride</p>
    </div>
  )
}

export default Footer;