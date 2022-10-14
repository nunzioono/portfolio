// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_VH-WhBDSv9QYckwwMzwC6_fRqLLtYnM",
  authDomain: "my-portfolio-4f9dd.firebaseapp.com",
  projectId: "my-portfolio-4f9dd",
  storageBucket: "my-portfolio-4f9dd.appspot.com",
  messagingSenderId: "638923648260",
  appId: "1:638923648260:web:9866baa86d66602f00b451",
  measurementId: "G-CE68F0CBBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);