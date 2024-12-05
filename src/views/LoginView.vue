<script>
import router from '@/router'
import { useSession } from '@/stores/session'
import { firebase_login } from '@/services/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
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
      }
      // const response = await firebase_login(credentials)

      // console.log('response', response)
      return;
      if (this.username === 'admin' && this.password === 'admin') {
        this.session.login({ name: this.name, password: this.password })
        router.push('/')
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
</script>
<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form class="grid max-w-xs w-full gap-3 rounded-xl bg-sky-400/50 px-6 py-4 shadow-xl">
      <h1 class="text-2xl font-bold text-center">Login</h1>
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Username" v-model="email" />
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder="Password" v-model="password" />
      <button @click.prevent="login" class="rounded bg-cyan-900 text-neutral-50 py-1 hover:bg-cyan-800 transition-colors">Login</button>
    </form>
  </div>
</template>
