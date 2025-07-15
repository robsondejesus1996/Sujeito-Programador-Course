import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAHyIN26Un8fC8OJ8fe5e1pAkzit0yCqg",
  authDomain: "curso-65658.firebaseapp.com",
  projectId: "curso-65658",
  storageBucket: "curso-65658.firebasestorage.app",
  messagingSenderId: "687014747059",
  appId: "1:687014747059:web:e236d5a0cf6671e05309c6",
  measurementId: "G-G11QD0K1JE"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);


export { db};