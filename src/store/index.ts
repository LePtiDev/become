import { defineStore } from 'pinia'
import { ref } from 'vue'

// import type { User } from '@/interfaces/user'

export const useStore = defineStore('main', () => {
  const user = ref<any>({})
  const pending = ref<boolean>(false)

  return { user, pending }
})
