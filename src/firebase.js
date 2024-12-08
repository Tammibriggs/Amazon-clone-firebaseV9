import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcmu3tyqxQfgOIR8XzoJIDJSuLlHEY-Eg",
    authDomain: "clone-60a38.firebaseapp.com",
    projectId: "clone-60a38",
    storageBucket: "clone-60a38.firebasestorage.app",
    messagingSenderId: "707433045911",
    appId: "1:707433045911:web:0d9792421d304fb1fcaed2"
  };

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {db, auth}