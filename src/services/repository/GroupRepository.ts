import { Repository } from '../Repository'
import { db } from '../database/db'
import type { IDatabase } from '../IDatabase'
import type { Group } from '@/model/Group'

class GroupsRepository extends Repository<Group> {
  constructor(db: IDatabase) {
    super(db, 'group')
  }

  // Add more precise method here...
}

export const groupRepository = new GroupsRepository(db)
