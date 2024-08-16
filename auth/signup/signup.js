import {
  auth,
  db,
  addDoc,
  setDoc,
  doc,
  collection,
  createUserWithEmailAndPassword,
} from "../../utils/firebase-config.js";

const signup_form = document.getElementById("signup_form");

signup_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  const firstName = e.target[2].value;
  const lastName = e.target[3].value;

  const userData = {
    email,
    password,
    firstName,
    lastName,
  };
  console.log(userData);

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName
  ) {
    return alert("All the fields are required");
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setDoc(doc(db, "users", user.uid), userData).then((userRef) => {
        window.location.href = "../../index.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("An error occurred: " + errorMessage);
    });
})