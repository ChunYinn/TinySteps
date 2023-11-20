// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDft4gVLyDxDbhEfbraS3rYy2KA9o4q2PY",
  authDomain: "tinysteps-9a483.firebaseapp.com",
  projectId: "tinysteps-9a483",
  storageBucket: "tinysteps-9a483.appspot.com",
  messagingSenderId: "1093632590780",
  appId: "1:1093632590780:web:75ff0ea86ec62462da61b9",
  measurementId: "G-KCP61KBGVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);