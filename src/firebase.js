import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDuG1GF64nNU7TCQSDjrQxGOlRqGP2HMrE",
  authDomain: "gokyochat-messengerclone.firebaseapp.com",
  databaseURL: "https://gokyochat-messengerclone.firebaseio.com",
  projectId: "gokyochat-messengerclone",
  storageBucket: "gokyochat-messengerclone.appspot.com",
  messagingSenderId: "84479499469",
  appId: "1:84479499469:web:dd46a0daaf1fc89c5a5d84",
  measurementId: "G-0KLBSEYLJY"
});

const db = firebaseApp.firestore();

export default db;