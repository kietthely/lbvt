// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMNE9V0uNPE7yxJ_vA5XQpxEWnYX-pX7w",
  authDomain: "sp2-24-lbvt.firebaseapp.com",
  projectId: "sp2-24-lbvt",
  storageBucket: "sp2-24-lbvt.appspot.com",
  messagingSenderId: "964795708881",
  appId: "1:964795708881:web:3434c9ef823f230e1a5cf0",
  measurementId: "G-X6RZPVNBZW"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;