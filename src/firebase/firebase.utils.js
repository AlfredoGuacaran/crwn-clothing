import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB05zkaQxiYNIjyQq-Axwzj2r2EbcztDcQ',
  authDomain: 'crwn-db-a3b47.firebaseapp.com',
  projectId: 'crwn-db-a3b47',
  storageBucket: 'crwn-db-a3b47.appspot.com',
  messagingSenderId: '373209710947',
  appId: '1:373209710947:web:246146a36f8574ebbdd356',
  measurementId: 'G-HNLNK4NLXS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
