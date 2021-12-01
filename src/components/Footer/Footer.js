import Button from '../Button/Button';
import styles from './Footer.module.css';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import mail from '../../assets/mail.svg';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Button className={styles.orderBtn}>ORDER NOW!</Button>
      <div className={styles.aboutMe}>
        <h3>Caked by Laura</h3>
        <p>
          Bespoke celebration cakes, custom cupcakes, personalised cookies and
          cheesecake
        </p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.location}>Brisbane, QLD Australia</div>
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

export default Footer;
