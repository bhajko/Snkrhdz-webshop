import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeQiepvh9nFcA3TQNr7Xi0H1y4ex1NmcA",
  authDomain: "snkrhdz-db.firebaseapp.com",
  databaseURL: "https://snkrhdz-db.firebaseio.com",
  projectId: "snkrhdz-db",
  storageBucket: "",
  messagingSenderId: "748348295392",
  appId: "1:748348295392:web:7bf35fb210968d33"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
