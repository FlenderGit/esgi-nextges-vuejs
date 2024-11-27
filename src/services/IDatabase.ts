import type { AbstractEntityManager } from './AbstractEntityManager'

export interface IDatabase {
  getEntityManager<T>(entityName: string): AbstractEntityManager<T>
}
