import {
  initializeApp
} from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const providerGoogle = new GoogleAuthProvider(firebaseApp);
// const providerFB = new firebase.auth.FacebookAuthProvider()
// const storage = firebase.storage();

export {
  auth,
  providerGoogle,
  serverTimestamp,
  onAuthStateChanged,
  onSnapshot,
  collection,
  doc,
  orderBy,
  query,
  addDoc,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
};
export default db;