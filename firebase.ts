import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxxxxxxxx",
  authDomain: "micodiag.firebaseapp.com",
  projectId: "micodiag",
  storageBucket: "micodiag.firebasestorage.app",
  messagingSenderId: "332330708550",
  appId: "1:332330708550:web:75aeefc1a9e8dfc43be447"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
