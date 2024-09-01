// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-b0278.firebaseapp.com",
  projectId: "blog-app-b0278",
  storageBucket: "blog-app-b0278.appspot.com",
  messagingSenderId: "898029067953",
  appId: "1:898029067953:web:21f4446afc325d55c40c90",
  measurementId: "G-Z7TD7PWXYL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

