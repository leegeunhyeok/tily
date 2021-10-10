import type { NextPage } from 'next';
import Head from 'next/head';

import { useAuthMachine, useAuthRouter } from '~/hooks';

const Home: NextPage = () => {
  const { service } = useAuthMachine();

  useAuthRouter('notAuthorized', '/login');

  const handleClickLogoutButton = () => {
    service.send('LOGOUT');
  };

  return (
    <div>
      <Head>
        <title>Tily</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={handleClickLogoutButton}>Logout</button>
      </main>
    </div>
  );
};

export default Home;
