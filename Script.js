import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login Successful!");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
}

// Sign Up
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account Created Successfully!");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
}
