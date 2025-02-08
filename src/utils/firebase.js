import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-67be4.firebaseapp.com",
  projectId: "netflix-gpt-67be4",
  storageBucket: "netflix-gpt-67be4.firebasestorage.app",
  messagingSenderId: "794268215076",
  appId: "1:794268215076:web:1d87dda30651478d20f5b1",
  measurementId: "G-JLC24NZC7Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export { auth,db };
