import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBhjcUcyKx2ZJCnJRwhAoIC4hzSpx-mX6U",
    authDomain: "clone-54bcf.firebaseapp.com",
    projectId: "clone-54bcf",
    storageBucket: "clone-54bcf.appspot.com",
    messagingSenderId: "19520758827",
    appId: "1:19520758827:web:efcb3c56d5797f9b70366e",
    measurementId: "G-ZVJYKLPRKL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };