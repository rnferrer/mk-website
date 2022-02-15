import react, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../mkBlack.png';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return(
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt='MK Logo'className='logo'></img>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ?       
            <FontAwesomeIcon icon={faXmark}/> : 
            <FontAwesomeIcon icon={faBars}/>}
          </div>
          <ul className={click ? 'nave-menu active': 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}></Link>
              Home
            </li>
            <li className="nav-item">
              <Link to='/events' className="nav-links" onClick={closeMobileMenu}></Link>
              Events
            </li>
            <li className="nav-item">
              <Link to='/board' className="nav-links" onClick={closeMobileMenu}></Link>
              Board
            </li>
            <li className="nav-item">
              <Link to='/hixstory' className="nav-links" onClick={closeMobileMenu}></Link>
              Hixstory
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;