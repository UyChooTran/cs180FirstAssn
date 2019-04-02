// src/firebase.js
import firebase from "firebase"

// PASTE FIREBASE CODE HERE (before "export default firebase;")
// It should look similar to the following:
// // Initialize Firebase
// var config = {
//   apiKey: "XXXXXXX",
//   authDomain: "XXXXX",
//   databaseURL: "XXXXXX",
//   projectId: "XXXXXXX",
//   storageBucket: "XXXXXXX",
//   messagingSenderId: "XXXXXXX"
// };
// firebase.initializeApp(config);

var config = {
    apiKey: "AIzaSyCIeJfY_4W5__qu3I_EemH67zp4GO3tcxI",
    authDomain: "firstassignment-25190.firebaseapp.com",
    databaseURL: "https://firstassignment-25190.firebaseio.com",
    projectId: "firstassignment-25190",
    storageBucket: "firstassignment-25190.appspot.com",
    messagingSenderId: "778437045155"
  };
  firebase.initializeApp(config);


export default firebase;
