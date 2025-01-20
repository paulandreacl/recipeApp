import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';
import MenuItems from './MenuItems';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <span className={styles.partRecipe}>Recipe</span>
        <span className={styles.partApp}>App</span>
      </div>
      <MenuItems />
      <button onClick={() => navigate('/')} className={styles.homeButton}>
        <img src="/imgs/ic_home.png" alt="home" />
      </button>
    </nav>
  );
};

export default Navbar;
