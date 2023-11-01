import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword ,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAjtZdajh6XmdtUPSRop58Hf-DBE38Iy24",
  authDomain: "authentication-8001a.firebaseapp.com",
  projectId: "authentication-8001a",
  storageBucket: "authentication-8001a.appspot.com",
  messagingSenderId: "959867814576",
  appId: "1:959867814576:web:9b12ffd833dd01a14df175",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let log_Btn = document.querySelector("#signIn");

log_Btn.addEventListener("click" , ()=>{
    let log_Email = document.querySelector("#lemail");
    let log_password = document.querySelector("#lpass");
    signInWithEmailAndPassword(auth, log_Email.value, log_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user =>" , user);
    window.location = "./welcome.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error =>" , errorMessage);
    
  });
})

let getBtn1 = document.querySelector("#Sbutton");
getBtn1.addEventListener("click" , ()=>{
    window.location = "./index.html"
})