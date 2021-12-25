import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC54qseBkI0KbQpjFXms6M5VbfsPn9VDCw",
  authDomain: "umang-blog.firebaseapp.com",
  projectId: "umang-blog",
  storageBucket: "umang-blog.appspot.com",
  messagingSenderId: "295176349294",
  appId: "1:295176349294:web:eb58e014aae164f609a87f",
  measurementId: "G-7547LVSTHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
