import { getFirestore } from 'firebase/firestore'
import { FirestoreDatabase } from './FirestoreDatabase'
import { initializeApp } from 'firebase/app'

const ENV = import.meta.env

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
}

const firebaseApp = initializeApp(firebaseConfig)

const firebase = getFirestore(firebaseApp)

// You just have to change the content of the variable
// by a class implementing IDatabase and see the result
export const db = new FirestoreDatabase(firebase)
