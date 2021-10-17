import React from 'react';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';
import { AuthMachineProvider } from '~/machines/authMachine';
import { styled } from '~/stitches.config';
import { Box } from '~/components/atoms';
import Head from 'next/head';

initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KET,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

const StyledPage = styled(Box, {
  width: '100%',
  height: '100%',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthMachineProvider>
      <StyledPage>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>{
          `* {
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
                         system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
                         'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
          }

          *:focus {
            outline: none;
          }

          html, body, #__next {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }

          ::placeholder,
          :-ms-input-placeholder {
            color: #757575;
            opacity: 1;
          }`
        }
        </style>
        <Component {...pageProps} />
      </StyledPage>
    </AuthMachineProvider>
  );
}

export default App;
