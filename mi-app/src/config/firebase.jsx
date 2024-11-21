// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB90t0ZLcVDlGdKAwBdJbwmcn3DEw_CBVA",
  authDomain: "react-coder-collino.firebaseapp.com",
  projectId: "react-coder-collino",
  storageBucket: "react-coder-collino.firebasestorage.app",
  messagingSenderId: "941440335011",
  appId: "1:941440335011:web:f42803675d65731f5fd316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

