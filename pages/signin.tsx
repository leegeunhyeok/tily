import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { styled, keyframes } from '~/stitches.config';
import { signIn } from '~/services/authentication';
import { useAuthMachine, useAuthRouter } from '~/hooks';
import { LOGO_MARGIN } from '~/constants';

import { CenterLayout } from '~/layouts';
import { Box } from '~/components/atoms';
import { IconButton } from '~/components/molecules';
import { LogoIcon, GitHubIcon } from '~/assets/icons';

const scaleUp = keyframes({
  '0%': {
    transform: 'scale(0)',
    opacity: 0.5,
  },
  '60%': {
    opacity: 1,
    transform: 'scale(1.2)',
  },
});

const Logo = styled(LogoIcon, {
  width: '80%',
  maxWidth: '200px',
  marginBottom: LOGO_MARGIN,
  animation: `${scaleUp} 500ms ease forwards`
});

const FadeView = styled(Box, {
  transition: 'opacity 300ms',
  variants: {
    hidden: {
      true: {
        opacity: 0,
      },
      false: {
        opacity: 1,
      },
    },
  },
});

const Home: NextPage = () => {
  const [showButton, setButtonVisibility] = useState(false);
  const { service } = useAuthMachine();

  useAuthRouter('authorized', '/');

  const handleAnimationEnd = () => setButtonVisibility(true);

  const handleClickLogoutButton = () => {
    signIn().then((token) => {
      service.send('LOGIN', { token });
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <CenterLayout flexCenter>
      <Head>
        <title>Tily :: SignIn</title>
      </Head>
      <Logo width={120} height={120} onAnimationEnd={handleAnimationEnd} />
      <FadeView hidden={!showButton}>
        <IconButton
          icon={GitHubIcon}
          onClick={handleClickLogoutButton}
        >
          GitHub로 시작하기
        </IconButton>
      </FadeView>
    </CenterLayout>
  );
};

export default Home;
