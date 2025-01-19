import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles['layout-main']}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
