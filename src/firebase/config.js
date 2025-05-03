import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0iIeE70gYnu-TEnE6f0vCytKRIaE9g6Q",
    authDomain: "finance-1023f.firebaseapp.com",
    projectId: "finance-1023f",
    storageBucket: "finance-1023f.firebasestorage.app",
    messagingSenderId: "543267189752",
    appId: "1:543267189752:web:839d1e7bc7b2a0961b5c0d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();