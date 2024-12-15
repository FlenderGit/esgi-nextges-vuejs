import { Repository } from '../Repository'
import { db } from '../database/db'
import type { IDatabase } from '../IDatabase'
import type { Event } from '@/model/Event'

class EventsRepository extends Repository<Event> {
  constructor(db: IDatabase) {
    super(db, 'events')
  }

  // Add more precise method here...
}

export const eventRepository = new EventsRepository(db)
