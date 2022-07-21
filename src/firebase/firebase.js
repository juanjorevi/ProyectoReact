// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCF_wWVuB-puEc6rI933DrlQrlBpG5c63g",
  authDomain: "ecommers-reactjs.firebaseapp.com",
  projectId: "ecommers-reactjs",
  storageBucket: "ecommers-reactjs.appspot.com",
  messagingSenderId: "121552743884",
  appId: "1:121552743884:web:c973e1b72ec0dd233ec169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);