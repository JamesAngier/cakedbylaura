import styles from './NavBar.module.css';
import logo from '../../assets/cblLge.png';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import mail from '../../assets/mail.svg';

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src={logo} alt="caked by laura logo" width="190" />
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/behindthebrand">Behind the Brand</Link>
        <Link to="/menu">Menu and Pricing</Link>
        <Link to="/cakedesigns">Cake Designs</Link>
        <Link to="/loyalty">Loyalty Program</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className={styles.navSocial}>
        <a href="https://www.facebook.com/cakedbylaura25/">
          <img width="23px" src={facebook} alt="facebook" />
        </a>
        <a href="http://www.instagram.com/cakedbylaura/">
          <img width="23px" src={instagram} alt="instagram" />
        </a>
        <a href="mailto:admin@cakedbylaura.com.au">
          <img width="23px" src={mail} alt="mail" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
