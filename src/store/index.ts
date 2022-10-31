import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { User } from '@/interfaces/user.ts'

export const useStore = defineStore('main', () => {
  const user = ref<User>({})
  const pending = ref<boolean>(false)

  return { user, pending }
})
