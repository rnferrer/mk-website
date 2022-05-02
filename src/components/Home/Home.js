import './Home.css'
import mkLogo from '../../images/mkWhite.png';
import baybayin from '../../images/baybayin.png';
import book from '../../images/book.png';
import bridge from '../../images/bridge.png';
import fahc from '../../images/fahc.png';
import kappa from '../../images/kappa.png';
import kapwa from '../../images/kapwa.png';
import pase from '../../images/pase.png';
import pibl from '../../images/pibl.png';
import filah from '../../images/filah.png';

function Home(){
  return(
    <>
      <div className='titlepage'>
        <div className='title-text'>
          <p className='subtitle1'>Welcome to</p>
          <p className='mk'>Mga Kapatid</p>
          <div className='baybayin-container'>
            <img src={baybayin} alt='baybay' className='baybayin'></img>
          </div>
          <div className='subtitle2-container'> 
            <i className='subtitle2'>Brothers and Sisters</i>
          </div>
        </div>

        <div className='title-logo-container'>
          <img src={mkLogo} alt='MK Logo' className='title-logo'></img>
        </div>


      </div>
      <div className='triangle-bottom'></div>


      <div className='mission'>
        <h1 className='mission-title'> Our Mission</h1>
        <p className='mission-body'>The purpose of this organization shall be to provide personal, social, cultural and academic support; to spread political awareness and consciousness on issues relevant to the Pilipinx American community; to support and encourage the purposes and activities of all Filipino/a/x-American organizations and communities at the University of California, Davis; to promote appreciation for, and develop the significance of the Pilipinx community in the University of California, Davis and in today’s society; and to always aspire to maintain an organizational atmosphere that lives up to our name, Mga Kapatid.</p>
      </div>


      <div className='triangle-top'></div>


      <div className='four-container'>
        <h1 className='four-title'>Four Pillars</h1>
        <div className='pillars-container'>
          <div className='academic-container'>
            <div className='pillar-logo-container'>
              <img src={book} alt='book' className ='pillar-logo'></img>
            </div>
            <h3 className='pillar-title'>Academic</h3>
            <p className='pillar-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='cultural-container'>
            <div className='pillar-logo-container'>
              <img src={book} alt='book' className ='pillar-logo'></img>
            </div>
            <h3 className='pillar-title'>Cultural</h3>
            <p className='pillar-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='political-container'>
            <div className='pillar-logo-container'>
              <img src={book} alt='book' className ='pillar-logo'></img>
            </div>
            <h3 className='pillar-title'>Political</h3>
            <p className='pillar-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='social-container'>
            <div className='pillar-logo-container'>
              <img src={book} alt='book' className ='pillar-logo'></img>
            </div>
            <h3 className='pillar-title'>Social</h3>
            <p className='pillar-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className='triangle-bottom'></div>


      <div className='organizations-parent-container'>
        <div className='organizations-container'>
          <h1 className='org-title'>
            Other Fil-Am Organizations at UC Davis
          </h1>
          <div className='logos-container'>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={bridge} alt='bridge' className='org-logo'></img>
              </div>
            </div>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={fahc} alt='fahc' className='org-logo fahc'></img>
              </div>
            </div>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={kappa} alt='kappa' className='org-logo kappa'></img>
              </div>
            </div>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={kapwa} alt='kapwa' className='org-logo'></img>
              </div>
            </div>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={pase} alt='pase' className='org-logo'></img>
              </div>
            </div>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={pibl} alt='pibl' className='org-logo'></img>
              </div>
            </div>
            <div className='org-container'>
              <div className='org-logo-container'>
                <img src={filah} alt='filah' className='org-logo'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;