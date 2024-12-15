import type { Entity } from '@/services/Entity'

export type Event = Entity & {
  name: string
  sub: string
  tag: string
}
