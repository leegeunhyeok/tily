import type { NextPage } from 'next';
import Head from 'next/head';

import { signIn } from '~/services/authentication';
import { useAuthRouter } from '~/hooks';
import { useContext } from 'react';
import { AuthMachineContext } from '~/machines/authMachine';
import { useActor } from '@xstate/react';

const Login: NextPage = () => {
  const context = useContext(AuthMachineContext);
  const [_, send] = useActor(context.service);

  useAuthRouter('authorized', '/');

  const handleClickLoginButton = () => {
    signIn()
      .then((token) => send('LOGIN', { token }))
      .catch((error) => alert(error?.message));
  };

  return (
    <div>
      <Head>
        <title>Tily - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={handleClickLoginButton}>Login</button>
      </main>
    </div>
  );
};

export default Login;
