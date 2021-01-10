import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqUa_4VBy9zmuPVpjYCF1xjdCbS6XqhV0",
  authDomain: "gize-clothing-db.firebaseapp.com",
  projectId: "gize-clothing-db",
  storageBucket: "gize-clothing-db.appspot.com",
  messagingSenderId: "288157846999",
  appId: "1:288157846999:web:f50057483f4690886d4f92",
  measurementId: "G-TGRFDCESF3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
