
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBob_YCTTQWEyIP2eIFbrdny06pRX1rzTw",
  authDomain: "expenser-tracke-next.firebaseapp.com",
  projectId: "expenser-tracke-next",
  storageBucket: "expenser-tracke-next.appspot.com",
  messagingSenderId: "997718591781",
  appId: "1:997718591781:web:7d23750c79cfcce1c7f2cc"
  // apiKey: process.env.FIREBASE_APIKEY,
  // authDomain: process.env.FIREBASE_AUTHDOMAIN,
  // projectId: process.env.FIREBASE_PROJECTID,
  // storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;