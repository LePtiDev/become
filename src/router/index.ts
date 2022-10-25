// Imports
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Signin from '@/pages/auth/Signin.vue'
import Signup from '@/pages/auth/Signup.vue'
import { auth } from '@/helpers/firebase.ts'
import { onAuthStateChanged } from 'firebase/auth'

const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()

const routes = [
  { path: '/', name: 'home', component: Home, meta: { requiresAuth: true } },
  { path: '/signin', name: 'signin', component: Signin },
  { path: '/signup', name: 'signup', component: Signup },
]

const router = createRouter({
  history,
  routes,
})

router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, (user: any) => {
    if (to.meta.requiresAuth && !user) {
      next({
        path: '/signin',
        replace: true,
      })
    } else {
      next()
    }
  })
})

export default router
