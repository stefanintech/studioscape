
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK9DzX2tUlelEPoubmq1UuDGqrKIog5aM",
  authDomain: "studio-rental-app-49d96.firebaseapp.com",
  projectId: "studio-rental-app-49d96",
  storageBucket: "studio-rental-app-49d96.appspot.com",
  messagingSenderId: "97412783648",
  appId: "1:97412783648:web:0be4633e805bb92ca86645",
  measurementId: "G-5G78J1BEHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()