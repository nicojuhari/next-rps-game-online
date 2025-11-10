// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';;

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA96TBu2Hg4GaCynzkq8Lv_fwpa-hXM0lE",
  authDomain: "rps-game-online.firebaseapp.com",
  projectId: "rps-game-online",
  storageBucket: "rps-game-online.firebasestorage.app",
  messagingSenderId: "506312600691",
  appId: "1:506312600691:web:664fb32fca4d69dc320e06"
};

// Initialize Firebase (avoiding re-initialization in development)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const db = getFirestore(app);

export default db;