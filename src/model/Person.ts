import type { Entity } from '@/services/Entity'

export type Role = 'student' | 'teacher' | 'admin'

export type User = Entity & {
  name: string
  role: Role
  email: string
  formation: string
  school: string
  id_group: string
}
