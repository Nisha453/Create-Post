// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEwePtZGdLsYHRyE2AmB4lwIlnoay8nPs",
  authDomain: "blog-app-abfe4.firebaseapp.com",
  projectId: "blog-app-abfe4",
  storageBucket: "blog-app-abfe4.appspot.com",
  messagingSenderId: "802631298422",
  appId: "1:802631298422:web:4f56281ed25f693aa49e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);