import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhBr0M-0ASQTdFNYuQcbo9wZBrey5DeAw",
    authDomain: "cart-on-293d3.firebaseapp.com",
    projectId: "cart-on-293d3",
    storageBucket: "cart-on-293d3.firebasestorage.app",
    messagingSenderId: "507427194903",
    appId: "1:507427194903:web:49029e24de5f5bb828b452"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);

export { app, auth, fireStore };