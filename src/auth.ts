import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const ENV = process.env;

const firebaseConfig = {
  apiKey: ENV.REACT_APP_API_KEY,
  authDomain: ENV.REACT_APP_AUTH_DOMAIN,
  projectId: ENV.REACT_APP_PROJECT_ID,
  storageBucket: ENV.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: ENV.REACT_APP_MESSAGING_SENDER_ID,
  appId: ENV.REACT_APP_APP_ID,
  measurementId: ENV.REACT_APP_MESAUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
