import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
    getFirestore,
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPgHc4uTwTnnSbcpPNJVvgAq0Bc1jsxE8",
    authDomain: "e-commerce-website-1aa67.firebaseapp.com",
    projectId: "e-commerce-website-1aa67",
    storageBucket: "e-commerce-website-1aa67.appspot.com",
    messagingSenderId: "312335295862",
    appId: "1:312335295862:web:1a4a37547f81da47dc0657",
    measurementId: "G-WK1PG2NPNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    app,
    auth,
    onAuthStateChanged,
    db,
    createUserWithEmailAndPassword,
    addDoc,
    setDoc,
    doc,
    collection,
    signOut,
    signInWithEmailAndPassword,
    getDoc,
    storage,
    ref,
    getDownloadURL,
    uploadBytes,
    getDocs,
};