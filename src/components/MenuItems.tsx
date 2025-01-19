import styles from './MenuItems.module.scss';
import { menuItems } from '../constants/menuConstants';

const MenuItems = () => {
  return (
    <div className={styles.menuItems}>
      {menuItems.map((item) => (
        <div key={item.name} className={styles.menuItem}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
