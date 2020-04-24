import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW4U3250nMdFAOhM1BMmPk-Q9IwJq7TN4",
  authDomain: "semaya-db.firebaseapp.com",
  databaseURL: "https://semaya-db.firebaseio.com",
  projectId: "semaya-db",
  storageBucket: "semaya-db.appspot.com",
  messagingSenderId: "15998954686",
  appId: "1:15998954686:web:4b7e8434715ab723a182ef",
  measurementId: "G-Y7EDEK5CKH",
};

firebase.initializeApp(firebaseConfig);

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, firebase, signInWithGoogle, auth, createUserProfileDocument };
