import Head from 'next/head';
import MainLayout from '../layouts/main-layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find your events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
