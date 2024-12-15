import type { Entity } from '@/services/Entity'

export type Offer = Entity & {
  name: string
  location: string
  type: 'stage' | 'alternance' | 'emploi'
}
