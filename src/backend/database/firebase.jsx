// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ2BXmqBTSGPkipMXuCxcBbdQ5m2_AIA4",
  authDomain: "reciperoaster-6ee25.firebaseapp.com",
  projectId: "reciperoaster-6ee25",
  storageBucket: "reciperoaster-6ee25.firebasestorage.app",
  messagingSenderId: "271329058063",
  appId: "1:271329058063:web:6db06131ac9a4ec0fb727a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);