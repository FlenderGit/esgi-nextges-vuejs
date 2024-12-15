import type { User } from '@/model/Person'
import { defineStore } from 'pinia'
import type { OAuth } from '@/model/Credentials'
import router from '@/router'
import { logout } from '@/services/auth'

export interface SessionState {
  user: User | null
  refreshToken: string | null
}

export interface SessionActions {
  login(payload: Payload): void
  logout(): void
}

export type Payload = {
  user: User
  oauth: OAuth
}

export const useSession = defineStore<'session', SessionState, {}, SessionActions>('session', {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'session',
        storage: localStorage,
      },
    ],
  },
  state: (): SessionState => {
    return {
      user: null,
      refreshToken: null,
    }
  },
  actions: {
    login(payload: Payload) {
      console.log('login', payload)
      this.user = payload.user
      this.refreshToken = payload.oauth.refreshToken
      console.log('login', this.user, this.refreshToken)
    },
    logout() {
      this.user = null
      this.refreshToken = null
      logout().then(() => {
        router.push({ name: 'login' })
      })
    },
  },
})
