import { getFirestore } from 'firebase/firestore'
import { FirestoreDatabase } from './FirestoreDatabase'

const firebase = getFirestore()

// You just have to change the content of the variable
// by a class implementing IDatabase and see the result
export const db = new FirestoreDatabase(firebase)
