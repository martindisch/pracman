import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'cross-fetch';
import Head from 'next/head';
import Header from './Header';
import styles from './Layout.module.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  fetch,
});

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = (props: Props) => (
  <>
    <Head>
      <title>{props.title}</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6200ee" />
      <meta name="apple-mobile-web-app-title" content="Pracman" />
      <meta name="application-name" content="Pracman" />
      <meta name="msapplication-TileColor" content="#6200ee" />
      <meta name="theme-color" content="#6200ee" />

      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <ApolloProvider client={client}>
      <Header />
      <div className={styles.content}>{props.children}</div>
    </ApolloProvider>
  </>
);

export default Layout;
