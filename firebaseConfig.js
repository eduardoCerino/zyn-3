import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAeIZZ-sU8fc2SbZNVdcnQAlWiB2EF7bCk",
  authDomain: "jacpot-prod.firebaseapp.com",
  projectId: "jacpot-prod",
  storageBucket: "jacpot-prod.appspot.com",
  messagingSenderId: "714329070120",
  appId: "1:714329070120:web:72bae4ed230be74c7fb31d"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);