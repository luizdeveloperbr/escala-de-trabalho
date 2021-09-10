

import firebase from "firebase/compat/app";
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  databaseURL: "https://escala-lider.firebaseio.com",
  storageBucket: "escala-lider.appspot.com",
  apiKey: "AIzaSyAF0eprbhSc4BnDAgukV7XvyQB6VZbY8Zg",
};

export const db = firebase.initializeApp(firebaseConfig).database()

export const storage = firebase.initializeApp(firebaseConfig).storage()
