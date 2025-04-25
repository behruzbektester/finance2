import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSXXx50rnA0Hr8itq2_ZgqWT9M_fI_Wlo",
  authDomain: "finance-2-bfc4e.firebaseapp.com",
  projectId: "finance-2-bfc4e",
  storageBucket: "finance-2-bfc4e.firebasestorage.app",
  messagingSenderId: "704279221633",
  appId: "1:704279221633:web:0715edfc13ad1c4078c480",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
