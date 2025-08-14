// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrVRhaqFLwMT3jOhhdue310Jns6cPrfoU",
  authDomain: "innovatehub-77af5.firebaseapp.com",
  projectId: "innovatehub-77af5",
  storageBucket: "innovatehub-77af5.firebasestorage.app",
  messagingSenderId: "712052300073",
  appId: "1:712052300073:web:cdc9f782d43c0d7e64ff38",
  measurementId: "G-QP67VXPKBF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
