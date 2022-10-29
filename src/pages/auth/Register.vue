<template>
  <div class="flex min-h-full items-center flex-col justify-center py-12 sm:px-6 lg:px-8">register</div>
</template>
<script lang="ts" setup>
// Components
import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'

// Lib
import { ref } from 'vue'
import { signinEmail } from '@/helpers/auth.ts'

// Data
const email = ref<string>('')
const password = ref<string>('')

// Methods
const submit = () => {
  signinEmail(email.value, password.value)
}
</script>
