import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1h4ZUn4Xdmn3edGdN2FLtbQc2W9kSufE",
  authDomain: "my-portfolio-f4066.firebaseapp.com",
  projectId: "my-portfolio-f4066",
  storageBucket: "my-portfolio-f4066.appspot.com",
  messagingSenderId: "479687261867",
  appId: "1:479687261867:web:39378e99ed748ef5df01ee",
  measurementId: "G-NNY8BM37B4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
