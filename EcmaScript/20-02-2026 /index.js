// 1.type module in script
// 2.live server
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.API_KEY);

// Initialize Firebase
import {
  initializeApp,
  firebaseConfig,
  getAuth,
   createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from './firebase.js'

const app = initializeApp(firebaseConfig);
console.log("initialized app=>", app);

const auth = getAuth(app);
console.log("auth=>", auth);

var text = document.getElementById("text");

//signup
var signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);

//login
var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", login);

// logout
var logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

// continue with google
var googleBtn = document.getElementById("google");
googleBtn.addEventListener("click", google);

// on reload data
onAuthStateChanged(auth, (user) => {
  if (user) {
    text.innerText = user.email;
  } else {
  }
});
// signup
function signup() {
  var semail = document.getElementById("semail").value;
  var spassword = document.getElementById("spassword").value;
  createUserWithEmailAndPassword(auth, semail, spassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>", user);
      text.innerText = user.email;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorMessage);
      console.log("errorcode", errorCode);
    });
}

function login() {
  var lemail = document.getElementById("lemail").value;
  var lpassword = document.getElementById("lpassword").value;

  signInWithEmailAndPassword(auth, lemail, lpassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>", user);
      text.innerText = user.email;
      text.style.color = "green";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorMessage);
      console.log("errorcode", errorCode);
      text.innerText = errorCode;
      text.style.color = "red";
    });
}

function logout() {
  signOut(auth)
    .then(() => {
      console.log("signout successfully");
      text.innerText = "";
    })
    .catch((error) => {
      console.log(error);
    });
}

// cont with google
const provider = new GoogleAuthProvider();
function google(){
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("user google=>",user.providerData[0].displayName)
    // text.innerText=user.providerData[0].displayName
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}
