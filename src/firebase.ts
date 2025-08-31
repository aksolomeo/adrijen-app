import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAUXDzD1wH5DFOwtTPDqqPxRYW2j_W27h4",
	authDomain: "adrijenribic-b47ea.firebaseapp.com",
	projectId: "adrijenribic-b47ea",
	storageBucket: "adrijenribic-b47ea.firebasestorage.app",
	messagingSenderId: "36330423428",
	appId: "1:36330423428:web:44cc1140be8482f23eaed1",
	measurementId: "G-C325RSQW8R",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
