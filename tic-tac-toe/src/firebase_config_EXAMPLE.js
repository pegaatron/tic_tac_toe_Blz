
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// copy this file and create your own firebase_config.js FILE OR DELETE _EXAMPLE from file name

// ADD YOUR FIREBASE CREDENTIALS HERE
const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
