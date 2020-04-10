import { ReactNode } from 'react';
import Header from './Header';
import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => (
  <div className={styles.page}>
    <Header />
    <div className={styles.content}>{props.children}</div>
  </div>
);

export default Layout;
