/*import { getFirestore } from 'firebase/firestore/lite'*/
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBrzHPdpV-lojaorfxZ5IY0cOfOGo2ZbyI",
  authDomain: "react-expo-markup.firebaseapp.com",
  projectId: "react-expo-markup",
  storageBucket: "react-expo-markup.appspot.com",
  messagingSenderId: "973746371847",
  appId: "1:973746371847:web:88a8fbb22cab7891fe19a2",
  measurementId: "G-6VB5YHK34Q"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();

export const db = firebase.firestore();

export default firebaseApp ;







