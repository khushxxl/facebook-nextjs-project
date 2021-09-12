// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage, ref } from "firebase/storage";

import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBAW2phhTm7NM6T-Txw1rTBG33WZs2bxMs",
  authDomain: "fb-clone-app-6ce8d.firebaseapp.com",
  projectId: "fb-clone-app-6ce8d",
  storageBucket: "fb-clone-app-6ce8d.appspot.com",
  messagingSenderId: "758511637627",
  appId: "1:758511637627:web:4838279c98c18494c0bede",
  measurementId: "G-830BWX0E2Q",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
// const db = getFirestore();
// const storage = getStorage(firebaseApp);
// const storageRef = ref(storage, "images/mountains.jpg");

export { db, storage };
