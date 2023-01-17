// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_58gecSzguIaBB9u-dP2MrP_A0u7yzC4",
  authDomain: "ipt-project-main.firebaseapp.com",
  projectId: "ipt-project-main",
  storageBucket: "ipt-project-main.appspot.com",
  messagingSenderId: "145996094819",
  appId: "1:145996094819:web:46eba859c2e4441c1c8756",
  measurementId: "G-K3XSK3H485",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
