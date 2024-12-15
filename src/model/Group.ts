import type { Entity } from '@/services/Entity'

export type Group = Entity & {
  classes: Class[]
  notes: Note[]
  documents: Document[]
}

export type Class = {
  name: string
  start: string
  duration: number
  room: string
  bloc: string
}

export type Note = {
  name: string
  note: number
}

export type Document = {
  name: string
  id: number
}
