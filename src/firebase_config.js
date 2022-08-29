
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfNZu2SF3r__ZquFOIYDD__407b-Vja5M",
  authDomain: "blizzard-tic-tac-toe.firebaseapp.com",
  projectId: "blizzard-tic-tac-toe",
  storageBucket: "blizzard-tic-tac-toe.appspot.com",
  messagingSenderId: "49408104372",
  appId: "1:49408104372:web:d47f93ba5511e5d54184e1",
  measurementId: "G-MGHFF0C5HF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
