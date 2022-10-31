// Imports
import { getByID } from './data'
import type { User } from '@/interface/user.ts'

import { useStore } from '@/store/index.ts'
import { animation } from './animation'

export const setUser = async (id: string) => {
  // Data
  const user: User = await getByID('users', id)
  const store = useStore()

  // Set store
  checkUser(user)
  store.user = user
}

export const checkUser = (user: User) => {
  if (!user.first_name) {
    animation('personal-informations', 'slide-left')
  } else if (!user.school_name) {
    animation('school-informations', 'slide-left')
  }
}
