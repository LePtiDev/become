import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
// Imports
import Home from '@/pages/Home.vue'
import Signin from '@/pages/auth/Signin.vue'
import Signup from '@/pages/auth/Signup.vue'
import { app } from '@/helpers/firebase.ts'

const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()

const routes = [
  { path: '/', component: Home },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
]

const router = createRouter({
  history,
  routes,
})

export default router
