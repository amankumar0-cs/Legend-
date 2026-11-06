// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgv4B9FzMm6A7iokA0fxUG6KjyF_YeIkc",
  authDomain: "aman-cloud-67cc3.firebaseapp.com",
  projectId: "aman-cloud-67cc3",
  storageBucket: "aman-cloud-67cc3.firebasestorage.app",
  messagingSenderId: "308275417142",
  appId: "1:308275417142:web:a470e508ae58a9ce14c897",
  measurementId: "G-RMCD6EH82S"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);