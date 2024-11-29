import type { Entity } from '@/services/Entity'

export type UserData = Entity & {
  username: string | null
  email: string | null
}

export type User = UserData & {
  courses: string[]
}
