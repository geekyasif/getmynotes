import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2oLz3Glkeml7Gmpb2dTbqIplbUjIRhGg",
  authDomain: "getmynotes-93864.firebaseapp.com",
  projectId: "getmynotes-93864",
  storageBucket: "getmynotes-93864.appspot.com",
  messagingSenderId: "630284091260",
  appId: "1:630284091260:web:efb3cb106760411a912ef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
