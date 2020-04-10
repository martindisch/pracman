import Link from 'next/link';
import {
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import styles from './Header.module.css';

const Header = () => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <Link href="/">
            <a className={styles['sneaky-anchor']}>
              <TopAppBarTitle>Pracman</TopAppBarTitle>
            </a>
          </Link>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <Link href="/account">
            <TopAppBarActionItem icon="account_circle" />
          </Link>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);

export default Header;
