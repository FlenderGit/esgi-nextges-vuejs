import type { Firestore } from 'firebase/firestore'
import type { IDatabase } from '../IDatabase'
import { FirestoreEntityManager } from './FirestoreEntityManager'
import type { Entity } from '../Entity'

export class FirestoreDatabase implements IDatabase {
  constructor(private database: Firestore) {}

  getEntityManager<T extends Entity>(entityName: string): FirestoreEntityManager<T> {
    return new FirestoreEntityManager<T>(this.database, entityName)
  }
}
