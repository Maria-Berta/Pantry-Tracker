// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// ################
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
} from 'firebase/auth';
// ################

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8nmeuaDXgjJqWj0ZmxDqR8Vdhre99z0g",
  authDomain: "inventory-management-app-dde85.firebaseapp.com",
  projectId: "inventory-management-app-dde85",
  storageBucket: "inventory-management-app-dde85.appspot.com",
  messagingSenderId: "1068670946110",
  appId: "1:1068670946110:web:24958d85f686d13b8f7a6f", 
  measurementId: "G-BPBY3RYTCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app); 
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
}

// btnLogin.addEventListener("click", loginEmailPassword); 

export{firestore, auth}