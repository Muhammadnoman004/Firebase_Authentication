import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore ,  collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
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
const db = getFirestore(app);

let Btn = document.querySelector("#signUp");

Btn.addEventListener("click", () => {
  let message = document.querySelector("#para");
  let Email = document.querySelector("#semail");
  let password = document.querySelector("#spass");

  if(Email.value == '' && password.value == ''){
    message.innerHTML = "Please Fill The Form."
  }
  else if(Email.value == '' ){
    message.innerHTML = "Please Enter The Email."
  }
  else if(password.value == ''){
    message.innerHTML = "Please Enter The Password"
  }
  else{
      console.log(Email.value);
      console.log(password.value);
      createUserWithEmailAndPassword(auth, Email.value, password.value)
        .then(async(userCredential) => {
          const user = userCredential.user;
          console.log("user =>", user);
          try {
            const docRef = await addDoc(collection(db, "users"), {
              first: Email.value,
              last: password.value,
              
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          window.location = "./logIn.html"


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error =>", errorCode);
         
        });
    }

});

let getBtn = document.querySelector('#Sbutton1');
getBtn.addEventListener('click' , ()=>{
    window.location = "./logIn.html"
})