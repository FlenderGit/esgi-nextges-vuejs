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
  <p>Login</p>
  <form>
    <input type="text" placeholder="Username" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click.prevent="login">Login</button>
  </form>
</template>
