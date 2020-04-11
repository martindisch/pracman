import { AppProps } from 'next/app';
import '../styles.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@rmwc/icon/icon.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/list/dist/mdc.list.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
