import { getAuth, signInWithPopup, signOut as firebaseSignOut, GithubAuthProvider } from 'firebase/auth';

const auth = getAuth();
const provider = new GithubAuthProvider();
provider.addScope('repo');

export const signIn = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential && credential.accessToken) {
      return credential.accessToken;
    } else {
      throw new Error('invalid credential');
    }
  });
