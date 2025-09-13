
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBK_mCKte7V-ZuMIPQQYW0SSpkh0aAEADg",
    authDomain: "tiendacorea-bc08f.firebaseapp.com",
    projectId: "tiendacorea-bc08f",
    storageBucket: "tiendacorea-bc08f.firebasestorage.app",
    messagingSenderId: "647227878752",
    appId: "1:647227878752:web:d3f3c7e9ebd50f67024205"
};

    //inicializo firebase 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)