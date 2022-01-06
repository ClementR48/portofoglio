
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn5ixPrVgbCZQyf_4mBoOyZA2uaoKiNnQ",
  authDomain: "portefolio-a913b.firebaseapp.com",
  projectId: "portefolio-a913b",
  storageBucket: "portefolio-a913b.appspot.com",
  messagingSenderId: "860546332728",
  appId: "1:860546332728:web:e6f1e3629c827587440ecd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)