// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBnVYAtdLkl4qEK-ftc8VW-7IBsCRSlJEo",
  authDomain: "apitienda-e754f.firebaseapp.com",
  projectId: "apitienda-e754f",
  storageBucket: "apitienda-e754f.appspot.com",
  messagingSenderId: "342397946388",
  appId: "1:342397946388:web:61d722782d8ddd9b9d7501",
  measurementId: "G-NGK3BR1TWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


