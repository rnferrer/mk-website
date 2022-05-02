import {useState} from "react";
import { Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import logoWhite from '../../images/mkWhite.png';
import './Navbar.css'

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return(
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
              <img src={logoWhite} alt='MK Logo'className='logo'></img>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ?       
            <FontAwesomeIcon icon={faXmark} className='fa-times'/> : 
            <FontAwesomeIcon icon={faBars}/>}
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>              
            </li>
            <li className="nav-item">
              <Link to='events' className='nav-links' onClick={closeMobileMenu}>Events</Link>
            </li>
            <li className="nav-item">
              <Link to='board' className='nav-links' onClick={closeMobileMenu}>Board</Link>
            </li>
            {(props.isLoggedIn)
              ?<li className="nav-item">
                <Link to='edit' className='nav-links' onClick={closeMobileMenu}>Edit</Link>
              </li>
              :""

            }
            {(props.isLoggedIn)
              ?<li className="nav-item">
                <Link to='logout' className='login-btn' onClick={closeMobileMenu}>Logout</Link>
              </li>
              :<li className="nav-item">
                <Link to='login' className='login-btn' onClick={closeMobileMenu}>Login</Link>
              </li>

            }


          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar;