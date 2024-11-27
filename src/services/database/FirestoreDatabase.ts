import type { IDatabase } from '../IDatabase'
import { FirestoreEntityManager } from './FirestoreEntityManager'

export class FirestoreDatabase implements IDatabase {
  constructor(private database: Firestore) {}

  getEntityManager<T>(entityName: string) {
    return new FirestoreEntityManager<T>(this.database, entityName)
  }
}
