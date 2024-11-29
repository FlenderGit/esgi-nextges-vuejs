import { Repository } from '../Repository'
import { db } from '../database/db'
import type { IDatabase } from '../IDatabase'
import type { User } from '@/model/Person'

class UserRepository extends Repository<User> {
  constructor(db: IDatabase) {
    super(db, 'user')
  }

  // Add more precise method here...
}

export const userRepository = new UserRepository(db)
