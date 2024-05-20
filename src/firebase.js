// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOR18Nodue1yHgpNOnVpZM-2BE7B8nP4Y",
  authDomain: "financely-cd49c.firebaseapp.com",
  projectId: "financely-cd49c",
  storageBucket: "financely-cd49c.appspot.com",
  messagingSenderId: "565603370370",
  appId: "1:565603370370:web:945f571172f3c664d33b9b",
  measurementId: "G-PK7QB35ZFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };