<script>
import router from '@/router'
import { useSession } from '@/stores/session'
import { firebase_login } from '@/services/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      session: useSession()
    }
  },
  methods: {
    async login() {
      const credentials = { email: this.email, password: this.password }

      try {
        const response = await firebase_login(credentials)
        console.log('response', response)
        this.session.login(response)
        router.push('/')
      } catch (error) {
        console.error(error)
        alert('Invalid credentials')
        this.error = 'Invalid credentials'
      }
      // const response = await firebase_login(credentials)

      // console.log('response', response)
      return;
      if (this.username === 'admin' && this.password === 'admin') {
        this.session.login({ name: this.name, password: this.password })
        router.push('/')
      } else {
        alert('Invalid credentials');
        this.error = 'Invalid credentials';
      }
    }
  }
}
</script>
<template>
  <div class="flex flex-col gap-9 justify-center items-center h-screen bg-sky-100">
    <h1 class="text-4xl font-bold text-center">NextGes</h1>
    <form class="grid max-w-sm w-full gap-3 rounded-xl bg-sky-50 px-6 py-4 shadow-xl">
      <h1 class="text-2xl font-bold text-center">Login</h1>
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Email" v-model="email" />
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder="Password" v-model="password" />
      <div class="text-red-500 text-sm" v-if="error">{{ error }}</div>
      <button @click.prevent="login" class="rounded bg-cyan-900 text-neutral-50 py-1 hover:bg-cyan-800 transition-colors">Login</button>
    </form>
    <div class="text-sm grid gap">
      <router-link to="/register" class="text-cyan-900 hover:underline">Create an account</router-link>
      <router-link to="/forgot-password" class="text-cyan-900 hover:underline">Forgot password ?</router-link>
    </div>
  </div>
</template>
