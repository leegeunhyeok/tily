import type { NextPage } from 'next';
import Head from 'next/head';
import { styled } from '~/stitches.config';

import { LoadingIndicator } from '~/components/atoms';

const LoadingPage = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Loading: NextPage = () => {
  return (
    <LoadingPage>
      <Head>
        <title>Loading..</title>
      </Head>
      <LoadingIndicator />
    </LoadingPage>
  );
};

export default Loading;
