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
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APPID,
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