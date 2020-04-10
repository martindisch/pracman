import styles from './Header.module.css';

const Header = () => (
  <div className={styles.container}>
    <div className={styles['app-name']}>This is on the left</div>
    <div>This is on the right</div>
  </div>
);

export default Header;
