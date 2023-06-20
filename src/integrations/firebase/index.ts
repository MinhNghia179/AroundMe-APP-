import { FirebaseOptions } from '@firebase/app-types';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import Config from 'react-native-config';

const firebaseConfig: FirebaseOptions = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export { firebase };
