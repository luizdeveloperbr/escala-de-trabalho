

import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
  databaseURL: "https://escala-lider.firebaseio.com",
};

export const db = firebase.initializeApp(firebaseConfig).database()


