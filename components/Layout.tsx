import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = (props: Props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div className={styles.content}>{props.children}</div>
  </>
);

export default Layout;
