// Imports
import { getByID, updateByID } from './data'
import type { User } from '@/interfaces/user'

import { useStore } from '@/store/index'
import { animation } from './animation'

export const setUser = async (id: string) => {
  // Data
  const user: any = await getByID('users', id)
  const store = useStore()

  // Set store
  checkUser(user.data())
  store.user = user.data()
}

export const checkUser = (user: any) => {
  if (!user.firstname) {
    animation('personal-informations', 'slide-left')
  } else if (!user.school_name) {
    animation('school-informations', 'slide-left')
  }
}

// User informations

export const updatePersonalInformations = async (form: any) => {
  // Data
  const store = useStore()
  const user: any = await updateByID('users', store.user.id, form)
}
