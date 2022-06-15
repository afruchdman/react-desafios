// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA11iGOkgKR2LGykYrR9n_A-B2xtX2xujc",
  authDomain: "desafiosreactcoder.firebaseapp.com",
  projectId: "desafiosreactcoder",
  storageBucket: "desafiosreactcoder.appspot.com",
  messagingSenderId: "648103236129",
  appId: "1:648103236129:web:103a9c9b95ca5a75544960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db