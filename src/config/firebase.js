/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAYIP-QE5BmqNElRK_1_eSpnx7NAfMf6kU",
  authDomain: "test-maeztra.firebaseapp.com",
  projectId: "test-maeztra",
  storageBucket: "test-maeztra.appspot.com",
  messagingSenderId: "530383455876",
  appId: "1:530383455876:web:15d5eaa168b95990a5e4d1",
  measurementId: "G-KTJHK7684D"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);