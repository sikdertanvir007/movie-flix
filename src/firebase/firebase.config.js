// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYH7JEug8dcR9vW9bRzUnZ6htplZ_qZ-k",
  authDomain: "movieflix-subscription.firebaseapp.com",
  projectId: "movieflix-subscription",
  storageBucket: "movieflix-subscription.firebasestorage.app",
  messagingSenderId: "514522154661",
  appId: "1:514522154661:web:64e684d62f608f3058af4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;