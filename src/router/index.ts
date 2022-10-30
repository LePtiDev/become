// Imports
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
// Auth
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import Forgot from '@/pages/auth/Forgot.vue'

import { auth } from '@/helpers/firebase.ts'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { requiresAuth: true, animation: 'slide-down' } },
  { path: '/auth/register', name: 'register', component: Register, meta: { animation: 'slide-down' } },
  { path: '/auth/login', name: 'login', component: Login, meta: { animation: 'slide-down' } },
  { path: '/auth/forgot', name: 'forgot', component: Forgot, meta: { animation: 'slide-down' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, (user: any) => {
    if (to.meta.requiresAuth && !user) {
      next({
        name: 'login',
      })
    } else if (user && (to.name === 'login' || to.name === 'forgot' || to.name === 'register')) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  })
})

export default router
