import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbfCIYz7SA63BGEfRng3rEbHCfezRa6Yc",
  authDomain: "doctors-portal-authentic-de980.firebaseapp.com",
  projectId: "doctors-portal-authentic-de980",
  storageBucket: "doctors-portal-authentic-de980.appspot.com",
  messagingSenderId: "812158667078",
  appId: "1:812158667078:web:8c28efb2793e5c60ac3d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;