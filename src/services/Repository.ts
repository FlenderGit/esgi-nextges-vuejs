import type { AbstractEntityManager } from './AbstractEntityManager'
import type { Entity } from './Entity'
import type { IDatabase } from './IDatabase'

export class Repository<T extends Entity> {
  private entityManager: AbstractEntityManager<T>

  constructor(db: IDatabase, entityName: string) {
    this.entityManager = db.getEntityManager(entityName)
  }

  async getAll(): Promise<T[]> {
    return this.entityManager.findAll()
  }

  async getById(id: string): Promise<T | null> {
    return this.entityManager.findById(id)
  }

  async create(item: T): Promise<T> {
    return this.entityManager.create(item)
  }

  async update(id: string, item: T): Promise<T> {
    return this.entityManager.update(id, item)
  }

  async delete(id: string): Promise<void> {
    return this.entityManager.delete(id)
  }
}
