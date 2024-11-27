import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  Firestore,
} from 'firebase/firestore'

import { AbstractEntityManager } from '../AbstractEntityManager'
import type { Entity } from '../Entity'

export class FirestoreEntityManager<T extends Entity> extends AbstractEntityManager<T> {
  constructor(
    private database: Firestore,
    collectionName: string,
  ) {
    super(collectionName)
  }

  async findAll(): Promise<T[]> {
    const querySnapshot = await getDocs(collection(this.database, this.entityName))
    return querySnapshot.docs.map((doc) => doc.data() as T)
  }

  async findById(id: string): Promise<T | null> {
    const docRef = doc(this.database, this.entityName, id)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      return docSnapshot.data() as T
    } else {
      return null
    }
  }

  async create(item: T): Promise<T> {
    const newDocRef = doc(collection(this.database, this.entityName))
    await setDoc(newDocRef, item)
    return { ...item, id: newDocRef.id }
  }

  async update(id: string, item: T): Promise<T> {
    const docRef = doc(this.database, this.entityName, id)
    await updateDoc(docRef, item)
    return { ...item, id }
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.database, this.entityName, id)
    await deleteDoc(docRef)
  }
}
