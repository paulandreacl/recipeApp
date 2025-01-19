import styles from './Navbar.module.scss';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <span className={styles.partRecipe}>Recipe</span>
        <span className={styles.partApp}>App</span>
      </div>
      <MenuItems />
    </nav>
  );
};

export default Navbar;
