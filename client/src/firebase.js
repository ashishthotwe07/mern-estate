// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "photofolio-438d9.firebaseapp.com",
  projectId: "photofolio-438d9",
  storageBucket: "photofolio-438d9.appspot.com",
  messagingSenderId: "185270524007",
  appId: "1:185270524007:web:2420157e651ced49e25cc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);