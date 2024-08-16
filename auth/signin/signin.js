import {
    auth,
    signInWithEmailAndPassword,
} from "../../utils/firebase-config.js";

const signin_form = document.getElementById("signin_form");

signin_form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.replace("../../index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Incorrect email and password");
      console.log(errorMessage);
    });
});