// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkJX8DG03VvJG_vHbs9wLTIBis-rsunU4",
  authDomain: "loginjuego.firebaseapp.com",
  projectId: "loginjuego",
  storageBucket: "loginjuego.appspot.com",
  messagingSenderId: "59592033787",
  appId: "1:59592033787:web:2b4c7141b72693e5f7775e",
  measurementId: "G-CBKEZS6MRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);