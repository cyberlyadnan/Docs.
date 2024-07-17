// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "docs-429cd.firebaseapp.com",
  projectId: "docs-429cd",
  storageBucket: "docs-429cd.appspot.com",
  messagingSenderId: "988086374175",
  appId: "1:988086374175:web:8b857bd305e5f66e26aa2a",
  measurementId: "G-WR5NMW9PS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);