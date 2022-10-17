import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYZx_048zg6S12F59eUHMBaiJtyRo0tQk",
  authDomain: "blog-886d7.firebaseapp.com",
  projectId: "blog-886d7",
  storageBucket: "blog-886d7.appspot.com",
  messagingSenderId: "467665949463",
  appId: "1:467665949463:web:4611f1d6df3277ed0d5d52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
