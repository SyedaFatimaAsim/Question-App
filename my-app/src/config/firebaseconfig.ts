// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpgNtayBcFOJLDjUvzci7Hj8cOUYuV8Mw",
  authDomain: "questionapp2-bd15e.firebaseapp.com",
  projectId: "questionapp2-bd15e",
  storageBucket: "questionapp2-bd15e.appspot.com",
  messagingSenderId: "828815131212",
  appId: "1:828815131212:web:bf23d4708098bf3c72eae9",
  measurementId: "G-K0MHV6WXFH",
  databaseURL:"https://questionapp2-bd15e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase


export default app;