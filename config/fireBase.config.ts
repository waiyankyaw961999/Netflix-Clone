// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmfxb0HsJ7hB0lQZ_UdqJtfhBNSdtMFSU",
  authDomain: "nextflixclone-9df80.firebaseapp.com",
  projectId: "nextflixclone-9df80",
  storageBucket: "nextflixclone-9df80.appspot.com",
  messagingSenderId: "452315341114",
  appId: "1:452315341114:web:db404d834139fa5b7a7003",
  measurementId: "G-RLQ4KV8K9M",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
