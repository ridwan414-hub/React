// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-di_HWV5M6sYJn8YX6xF6uxQaSm2z_Gs",
    authDomain: "first-firebase-project-296eb.firebaseapp.com",
    projectId: "first-firebase-project-296eb",
    storageBucket: "first-firebase-project-296eb.appspot.com",
    messagingSenderId: "194700958189",
    appId: "1:194700958189:web:cad94e6a15417af12befe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;