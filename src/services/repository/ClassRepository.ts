import { Repository } from '../Repository'
import { db } from '../database/db'
import type { IDatabase } from '../IDatabase'
import type { Class } from '@/model/Group'

class ClassRepository extends Repository<Class> {
  constructor(db: IDatabase) {
    super(db, 'class')
  }

  // Add more precise method here...
}

export const classRepository = new ClassRepository(db)
