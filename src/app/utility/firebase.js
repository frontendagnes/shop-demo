import firebase from 'firebase';
import "firebase/database";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbohg5EzrYOoWnFS1mr5pGveUmyYnKK1Q",
  authDomain: "shop-a251f.firebaseapp.com",
  projectId: "shop-a251f",
  storageBucket: "shop-a251f.appspot.com",
  messagingSenderId: "995160837515",
  appId: "1:995160837515:web:d666a20e94679113cc338e"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth };
export default db;
