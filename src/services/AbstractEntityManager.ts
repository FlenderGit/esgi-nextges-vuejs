import type { Entity } from './Entity'

export abstract class AbstractEntityManager<T extends Entity> {
  constructor(readonly entityName: string) {}

  abstract findAll(): Promise<T[]>
  abstract findById(id: string): Promise<T | null>
  abstract create(item: T): Promise<T>
  // abstract update(id: string, item: Partial<T>): Promise<T>
  abstract delete(id: string): Promise<void>
}
