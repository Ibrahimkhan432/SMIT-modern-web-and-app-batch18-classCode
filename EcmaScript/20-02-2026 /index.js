// 1.type module in script
// 2.live server

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDKU1D-ZgLrmgTpAbgMgJtA4U4e70jnb8M",
  authDomain: "smit-mwa-batch-18.firebaseapp.com",
  projectId: "smit-mwa-batch-18",
  storageBucket: "smit-mwa-batch-18.firebasestorage.app",
  messagingSenderId: "514258031376",
  appId: "1:514258031376:web:7f5d9b6f2209fb72970b95",
  measurementId: "G-JT7ML11JCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("initialized app=>", app);

const auth = getAuth(app);
console.log("auth=>", auth);

//signup
var signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);

function signup() {
  var semail = document.getElementById("semail").value;
  var spassword = document.getElementById("spassword").value;

  createUserWithEmailAndPassword(auth, semail, spassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error",errorMessage)
      console.log("errorcode",errorCode)
    });
}
