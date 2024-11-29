import { getFirestore } from 'firebase/firestore'
import { FirestoreDatabase } from './FirestoreDatabase'
import { initializeApp } from 'firebase/app'

const ENV = import.meta.env

const firebaseConfig = {
  apiKey: ENV.VITE_FIREBASE_API_KEY,
  authDomain: ENV.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: ENV.VITE_FIREBASE_PROJECT_ID,
  storageBucket: ENV.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.VITE_FIREBASE_APP_ID,
  measurementId: ENV.VITE_FIREBASE_MEASUREMENT_ID,
}

console.log(firebaseConfig)
const firebaseApp = initializeApp(firebaseConfig)

const firebase = getFirestore(firebaseApp)

// You just have to change the content of the variable
// by a class implementing IDatabase and see the result
export const db = new FirestoreDatabase(firebase)
