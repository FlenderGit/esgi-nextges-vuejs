import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotesVue from '../views/NotesView.vue'
import PlanningView from '../views/PlanningView.vue'
import { useSession } from '@/stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false },
    },
    {
      path: '/planning',
      name: 'planning',
      component: PlanningView,
      meta: { requiresAuth: true },
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesVue,
      meta: { requiresAuth: true },
    },
  ],
})

const isAuthenticated = (): boolean => {
  const session = useSession()
  return session.refreshToken !== null
}

router.beforeEach((to, from, next) => {
  console.log('to', to, isAuthenticated(), to.meta.requiresAuth)
  if (to.name === 'login' && isAuthenticated()) {
    next({ name: 'home' })
  } else if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
