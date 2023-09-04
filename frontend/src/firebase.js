import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAM2VuJ8m3MGXlAwmAo4_Fx2PvLs5UpICA",
  authDomain: "liberbin3.firebaseapp.com",
  projectId: "liberbin3",
  storageBucket: "liberbin3.appspot.com",
  messagingSenderId: "923744075605",
  appId: "1:923744075605:web:f27d1830dd6c25018fb9dc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };