import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAK8EIbd-XFsAXUDbZ1Ch7MrngpZdln0uk",
  authDomain: "homeproject-f56c7.firebaseapp.com",
  databaseURL: "https://homeproject-f56c7-default-rtdb.firebaseio.com",
  projectId: "homeproject-f56c7",
  storageBucket: "homeproject-f56c7.appspot.com",
  messagingSenderId: "276101616259",
  appId: "1:276101616259:web:a285b87b5afa2c776381b6",
  
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
