import type { NextPage } from 'next';
import Head from 'next/head';
import { styled, keyframes } from '~/stitches.config';

const LoadingPage = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const animation = keyframes({
  from: {
    transform: 'scale(0)',
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
});

const LoadingIndicator = styled('div', {
  width: '4rem',
  height: '4rem',
  maxWidth: '200px',
  borderRadius: '50%',
  backgroundColor: '$grey-900',
  animation: `${animation} 500ms alternate infinite`
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
