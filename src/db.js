

import firebase from "firebase/compat/app";
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCKJ5IMfVYYncyZi6lMU_tk26eZ3LkeL8w",
  authDomain: "back-end-cf6f5.firebaseapp.com",
  databaseURL: "https://back-end-cf6f5.firebaseio.com",
  projectId: "back-end-cf6f5",
  storageBucket: "back-end-cf6f5.appspot.com",
  messagingSenderId: "326153185342",
  appId: "1:326153185342:web:a7258509755b623147896f"
};

export const db = firebase.initializeApp(firebaseConfig).database()

export const storage = firebase.initializeApp(firebaseConfig).storage()
