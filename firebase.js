// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage, ref } from "firebase/storage";

import firebase from 'firebase'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyDnUzSK7go83H_kw5qA6p2ZtmgrA6XzgtI',
  authDomain: 'facebook-clone-2e1c5.firebaseapp.com',
  projectId: 'facebook-clone-2e1c5',
  storageBucket: 'facebook-clone-2e1c5.appspot.com',
  messagingSenderId: '350674477383',
  appId: '1:350674477383:web:d80e1662674eed00f56c62',
  measurementId: 'G-J9JK4H3EB0',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()
// const db = getFirestore();
// const storage = getStorage(firebaseApp);
// const storageRef = ref(storage, "images/mountains.jpg");

export { db, storage }
