import { createRouter, createWebHistory } from 'vue-router'
import { useSession } from '@/stores/session'

const DEFAULT_ROUTE = { name: 'home' }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/planning',
      name: 'planning',
      component: () => import('../views/PlanningView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

const isAuthenticated = (): boolean => {
  const session = useSession()
  return session.refreshToken !== null
}

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && isAuthenticated()) {
    next(DEFAULT_ROUTE)
  } else if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' })
  } else if (
    !to.meta.requiresAdmin ||
    (to.meta.requiresAdmin && useSession().user?.name === 'admin')
  ) {
    next()
  } else {
    next(DEFAULT_ROUTE)
  }
})

export default router
