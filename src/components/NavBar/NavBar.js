import styles from './NavBar.module.css';
import logo from '../../assets/cblLge.png';
import { Link, useNavigate } from 'react-router-dom';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import mail from '../../assets/mail.svg';
import { useEffect, useState } from 'react';

function NavBar() {
  const url = window.location.pathname;
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(url);
  }, [setActiveLink, url, navigate]);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src={logo} alt="caked by laura logo" width="190" />
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link
          to="/behindthebrand"
          className={
            activeLink === '/behindthebrand' ? styles.navLinkActive : ''
          }
        >
          Behind the Brand
        </Link>
        <Link
          to="/menu"
          className={activeLink === '/menu' ? styles.navLinkActive : ''}
        >
          Menu and Pricing
        </Link>
        <Link
          to="/cakedesigns"
          className={activeLink === '/cakedesigns' ? styles.navLinkActive : ''}
        >
          Cake Designs
        </Link>
        <Link
          to="/loyalty"
          className={activeLink === '/loyalty' ? styles.navLinkActive : ''}
        >
          Loyalty Program
        </Link>
        <Link
          to="/contact"
          className={activeLink === '/contact' ? styles.navLinkActive : ''}
        >
          Contact Us
        </Link>
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
