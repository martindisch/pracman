import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import { SimpleMenu, MenuItem, MenuSurfaceAnchor } from '@rmwc/menu';
import styles from './Header.module.css';

const Header = () => {
  const router = useRouter();
  return (
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
            <MenuSurfaceAnchor>
              <SimpleMenu
                focusOnOpen={false}
                anchorCorner="bottomStart"
                handle={<TopAppBarActionItem icon="account_circle" />}
              >
                <MenuItem onClick={() => router.push('/account')}>
                  Login
                </MenuItem>
              </SimpleMenu>
            </MenuSurfaceAnchor>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
};

export default Header;
