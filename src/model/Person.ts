import type { Entity } from '@/services/Entity'

export type User = Entity & {
  name: string
  email: string
  formation: string
  school: string
}
