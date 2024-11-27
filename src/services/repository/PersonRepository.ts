import { Repository } from '../Repository'
import type { Person } from '../../model/Person'
import { db } from '../database/db'
import type { IDatabase } from '../IDatabase'

class PersonRepository extends Repository<Person> {
  constructor(db: IDatabase) {
    super(db, 'person')
  }

  // Add more precise method here...
}

export const personRepo = new PersonRepository(db)
