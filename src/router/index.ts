// Imports
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import { setUser } from '@/helpers/user'
// Components
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import Forgot from '@/pages/auth/Forgot.vue'
import PersonalInformations from '@/pages/auth/PersonalInformations.vue'
import SchoolInformations from '@/pages/auth/SchoolInformations.vue'
import { useStore } from '@/store/index'

import { auth } from '@/helpers/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { requiresAuth: true, animation: 'slide-down' } },
  { path: '/auth/register', name: 'register', component: Register, meta: { animation: 'slide-down' } },
  { path: '/auth/login', name: 'login', component: Login, meta: { animation: 'slide-down' } },
  { path: '/auth/forgot', name: 'forgot', component: Forgot, meta: { animation: 'slide-down' } },
  { path: '/auth/personal-informations', name: 'personal-informations', component: PersonalInformations, meta: { animation: 'slide-down', requiresAuth: true } },
  { path: '/auth/school-informations', name: 'school-informations', component: SchoolInformations, meta: { animation: 'slide-down', requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  onAuthStateChanged(auth, (user: any) => {
    if (user) {
      next()
      setUser(user.uid)
    } else {
      if (to.meta.requiresAuth) {
        next({
          name: 'login',
        })
      } else {
        next()
      }
    }
  })
})

export default router
