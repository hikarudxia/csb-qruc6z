// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAWqr4qa9GpcOIHed5GSVMcyJ8PS0b5wjk",
  authDomain: "codesand-db.firebaseapp.com",
  projectId: "codesand-db",
  storageBucket: "codesand-db.appspot.com",
  messagingSenderId: "820335105925",
  appId: "1:820335105925:web:9f447490b63ae6622856ec",
  measurementId: "G-E05LQT008G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
