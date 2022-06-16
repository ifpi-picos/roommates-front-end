import React from 'react';
import Head from 'next/head';
import Start from '../containers/start';

import './index.css'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Roommates</title>
      </Head>

      <main>
          <Start />
      </main>
    </div>
  );
}

export default Home
