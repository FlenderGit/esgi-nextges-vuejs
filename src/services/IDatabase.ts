import type { AbstractEntityManager } from './AbstractEntityManager'
import type { Entity } from './Entity'

export interface IDatabase {
  getEntityManager<T extends Entity>(entityName: string): AbstractEntityManager<T>
}
