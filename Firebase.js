// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEzrcI4IFhU_iwpecVojwXhbncHIV59oQ",
  authDomain: "webget-8910e.firebaseapp.com",
  projectId: "webget-8910e",
  storageBucket: "webget-8910e.appspot.com",
  messagingSenderId: "963826379877",
  appId: "1:963826379877:web:592e1b3ceebd81486daa8c",
  measurementId: "G-WW5QTTVRSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);