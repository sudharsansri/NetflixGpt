// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHKuj1npuVY1eVddaiFyeBG36Wb1pq9eE",
  authDomain: "netflix-gpt-a518b.firebaseapp.com",
  projectId: "netflix-gpt-a518b",
  storageBucket: "netflix-gpt-a518b.firebasestorage.app",
  messagingSenderId: "388025155418",
  appId: "1:388025155418:web:19f052804949a9594cfd63",
  measurementId: "G-SHB4Q2Z0K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);