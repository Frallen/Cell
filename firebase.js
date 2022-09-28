// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf1FnMSoBR-ZlmuB24bEBYKF-7VlNTedo",
  authDomain: "cell-11ef4.firebaseapp.com",
  projectId: "cell-11ef4",
  storageBucket: "cell-11ef4.appspot.com",
  messagingSenderId: "188979656956",
  appId: "1:188979656956:web:76102705194b4549a33f79",
  measurementId: "G-MDDWM0GNW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
