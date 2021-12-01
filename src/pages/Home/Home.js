import styles from './Home.module.css';
import cake1 from '../../assets/cake1.jpeg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <img src={cake1} alt="cake1" />
        <div className={styles.centered}>
          <h3>
            Hey cake lovers! I’m so glad you’re here! Here you will find bespoke
            cakes, cupcakes, cookies and cheesecake which can be tailored to
            your next celebration! First let me introduce the face behind the
            cakes!
          </h3>
          <button>
            <Link to="/behindthebrand">Behind the Brand</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
