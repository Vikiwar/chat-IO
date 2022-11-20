// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNFwFGN1fI4vjPp5ox3YPfWKrB4twl8AI",
  authDomain: "chat-i0.firebaseapp.com",
  projectId: "chat-i0",
  storageBucket: "chat-i0.appspot.com",
  messagingSenderId: "532798834587",
  appId: "1:532798834587:web:fdd56a1bfa64b90401433e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
