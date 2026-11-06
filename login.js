import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } catch (error) {

        alert("Login Failed!\n\n" + error.message);

    }

});