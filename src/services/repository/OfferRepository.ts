import { Repository } from '../Repository'
import { db } from '../database/db'
import type { IDatabase } from '../IDatabase'
import type { Offer } from '@/model/Offer'

class OffersRepository extends Repository<Offer> {
  constructor(db: IDatabase) {
    super(db, 'offer')
  }

  // Add more precise method here...
}

export const offerRepository = new OffersRepository(db)
