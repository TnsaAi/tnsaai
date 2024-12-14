import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOtntcQ-w6MqXdJFncHKrmK8XKfSTm7GE",
  authDomain: "tnsaai.firebaseapp.com",
  projectId: "tnsaai",
  storageBucket: "tnsaai.firebasestorage.app",
  messagingSenderId: "700495151472",
  appId: "1:700495151472:web:418d27fc09ed4d1138cfb5",
  measurementId: "G-CPLEJN2WZ7"
};

let app;
let auth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { app, auth };

