import { getFirestore } from 'firebase/firestore'
import { FirestoreDatabase } from './FirestoreDatabase'

const firebase = getFirestore()

export const db = new FirestoreDatabase(firebase)
