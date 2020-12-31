import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAUczJaOvxZyKSuR5Fh6nyMQKLRlrIn3s",
  authDomain: "clone-f54d1.firebaseapp.com",
  projectId: "clone-f54d1",
  storageBucket: "clone-f54d1.appspot.com",
  messagingSenderId: "732925354344",
  appId: "1:732925354344:web:0c22c443e0ffb1917376dd",
  measurementId: "G-XFP4EHQ87F",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;