import React from 'react';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';
import { AuthMachineProvider } from '~/machines/authMachine';

initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KET,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthMachineProvider>
      <Component {...pageProps} />
    </AuthMachineProvider>
  );
}

export default App;
