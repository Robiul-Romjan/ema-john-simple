// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY94kblQwfoKNyOOVVrAc8H4dY-jHLhps",
  authDomain: "ema-john-simple-auth-8c85e.firebaseapp.com",
  projectId: "ema-john-simple-auth-8c85e",
  storageBucket: "ema-john-simple-auth-8c85e.appspot.com",
  messagingSenderId: "1005925355239",
  appId: "1:1005925355239:web:43d2461ee1d34f515bdc42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;