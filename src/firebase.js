// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFoubXldAaz5vJx2f56Ph219LDPJD4pwc",
  authDomain: "portfolio-ead28.firebaseapp.com",
  databaseURL: "https://portfolio-ead28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-ead28",
  storageBucket: "portfolio-ead28.appspot.com",
  messagingSenderId: "1037791580377",
  appId: "1:1037791580377:web:11222e01e11bcbe138eec8",
  measurementId: "G-SFL9772KNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };