// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHdK-EGma1ClRRprQBymYBG6FrZkzyzjc",
  authDomain: "auth-moha-milon-40bb6.firebaseapp.com",
  projectId: "auth-moha-milon-40bb6",
  storageBucket: "auth-moha-milon-40bb6.appspot.com",
  messagingSenderId: "288203873297",
  appId: "1:288203873297:web:49d45dd4791479afdf65b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth