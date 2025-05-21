// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW6OqRl2WxnlfK9CvCwiggr9btWt0lhlA",
  authDomain: "netflix-gpt-9cb70.firebaseapp.com",
  projectId: "netflix-gpt-9cb70",
  storageBucket: "netflix-gpt-9cb70.firebasestorage.app",
  messagingSenderId: "9577138092",
  appId: "1:9577138092:web:1bc9c754ebecc9182fdc09",
  measurementId: "G-2F58Y5EV9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();