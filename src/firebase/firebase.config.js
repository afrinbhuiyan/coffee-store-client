// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWDj1y7kZV93xTP79RQcd3W76fkHo-RM",
  authDomain: "coffee-store-d6cbf.firebaseapp.com",
  projectId: "coffee-store-d6cbf",
  storageBucket: "coffee-store-d6cbf.firebasestorage.app",
  messagingSenderId: "858683764509",
  appId: "1:858683764509:web:44a939b3458e58c8a4fbf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;