import { app, auth } from './firebase';
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

let analytics;
let googleProvider;

if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
    googleProvider = new GoogleAuthProvider();
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
}

const firestore = getFirestore(app);

export { auth, googleProvider, analytics, firestore };

