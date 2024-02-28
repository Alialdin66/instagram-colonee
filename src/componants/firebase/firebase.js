// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB3vN1joK9N6Z2t8COc7TgvmN9viY6tiIo",
  authDomain: "insta-colone-eead0.firebaseapp.com",
  projectId: "insta-colone-eead0",
  storageBucket: "insta-colone-eead0.appspot.com",
  messagingSenderId: "677061978744",
  appId: "1:677061978744:web:c2817b027def7428c35b8d",
  measurementId: "G-6R8HWVZBT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };