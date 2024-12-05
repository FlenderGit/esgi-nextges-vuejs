import type { Credentials, RegisterCredentials } from '@/model/Credentials'
import type { OAuth } from '@/model/Credentials'
import type { Payload } from '@/stores/session'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { firebaseApp } from './database/db'

const auth = getAuth(firebaseApp)

function register(credentials: RegisterCredentials) {
  if (credentials.email && credentials.password) {
    return createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        console.log('register', userCredential)
        return userCredential.user.updateProfile({
          displayName: credentials.username,
        })
      })
      .catch((error) => {
        console.error('register', error)
      })
  }
}

export async function logout() {
  return await signOut(auth)
}

export async function firebase_login(credentials: Credentials): Promise<Payload> {
  console.log('login', credentials)

  if (credentials.email && credentials.password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      )

      console.log('login', userCredential)

      const accessToken = await userCredential.user.getIdToken()
      const refreshToken = userCredential.user.refreshToken
      const id = userCredential.user.uid
      const email = userCredential.user.email
      const username = userCredential.user.displayName

      return {
        user: {
          id,
          email,
          username,
        },
        oauth: {
          accessToken,
          refreshToken,
        },
      }
    } catch (error) {
      console.error('login', error)
      throw new Error('Authentication failed')
    }
  }

  throw new Error('Invalid credentials')
}
