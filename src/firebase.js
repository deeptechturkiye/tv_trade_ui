// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Ev2UzatV-trod6J0WVvy3UafrP2v3Yc",
  authDomain: "fonizler-auth.firebaseapp.com",
  projectId: "fonizler-auth",
  storageBucket: "fonizler-auth.appspot.com",
  messagingSenderId: "169871519257",
  appId: "1:169871519257:web:1129e36c1df1f669953408",
  measurementId: "G-C7HDBM12GV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
