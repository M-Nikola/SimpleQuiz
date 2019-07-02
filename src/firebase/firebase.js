import firebase from "firebase";
import "@firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBrUpi2m1RRz2W7_vgnKONflKdG3sVdUtU",
  authDomain: "silicon-valley-code.firebaseapp.com",
  databaseURL: "https://silicon-valley-code.firebaseio.com",
  projectId: "silicon-valley-code",
  storageBucket: "silicon-valley-code.appspot.com",
  messagingSenderId: "451224971200"
};


// if (!firebase.apps.length) {
  firebase.initializeApp(config);
// }

const auth = firebase.auth();
const db = firebase.firestore();
// const db = firebase.database();

// const settings = { timestampsInSnapshots: true };
// db.settings(settings);
// db.enablePersistence()
//   .catch(function(err) {
//     console.log("cached_erro", err);
    
//     if (err.code == 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code == 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   });
const firebaseObject = firebase;
export { auth, db, firebaseObject };
