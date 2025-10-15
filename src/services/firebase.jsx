// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUhcIMrr-83eoCQ2s-zhJav628lcIFh7g",
  authDomain: "codigodevestimenta-69993.firebaseapp.com",
  projectId: "codigodevestimenta-69993",
  storageBucket: "codigodevestimenta-69993.firebasestorage.app",
  messagingSenderId: "856411640727",
  appId: "1:856411640727:web:1b5e6adf14bb4a06326ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);