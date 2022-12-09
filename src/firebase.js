// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAipdK6QjkEewf_UklXWQVdLhMFMHNCw-I",
  authDomain: "skip-it-120ed.firebaseapp.com",
  projectId: "skip-it-120ed",
  storageBucket: "skip-it-120ed.appspot.com",
  messagingSenderId: "459897227431",
  appId: "1:459897227431:web:80420ca87a22332ed77382",
  measurementId: "G-2VJ207JV8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);