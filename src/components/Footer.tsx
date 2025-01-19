import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgFooter}>
        <div className={styles.text}>Con el Patrocinio de</div>
        <div className={styles.imgSection}>
          <img src="/src/assets/products.png" alt="Products" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
