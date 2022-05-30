import React from 'react';
import Head from 'next/head';
import InitialPage from '../components/InitialPage/initialPage';
import Login from '../containers/login';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Roommates</title>
      </Head>

      <main>
        <Login />
      </main>
    </div>
  );
}

export default Home
