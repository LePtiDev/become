<template>
  <div class="flex min-h-full flex-col py-12 px-4 sm:px-6 lg:px-8 justify-between">
    <div>
      <h1 class="text-blue-500 text-2xl font-bold">Content de te revoir <span>👋</span></h1>
      <p class="text-sm mt-4 text-gray-400">Nous somme content de te revoir. <br />Pour utiliser l'application veuillez vous connecter.</p>
    </div>

    <Form v-slot="{ errors }" @submit="submit">
      <!-- Inputs -->
      <UiInput class="mt-[34px]" label="Email" type="email" name="email" :error="errors.email" placeholder="Jean.dupont@mail.com" />
      <UiInput class="mt-[24px]" label="Mot de passe" type="password" name="password" :error="errors.password" placeholder="***********" />

      <!-- Forgot -->
      <div class="w-full flex justify-end text-sm text-gray-400">
        <router-link class="underline" to="/auth/forgot">Mot de passe oublié</router-link>
      </div>

      <!-- Buttons -->
      <UiButton class="w-full mt-[34px]" type="submit" color="primary">Me connecter</UiButton>

      <!-- Other login -->
      <UiSpacer>Autre moyen de connexion</UiSpacer>
      <div class="flex">
        <UiButton class="w-full mr-2" type="button" color="secondary">
          <img class="w-4 mr-2" src="@/assets/images/compagnies/facebook.png" />
          Facebook
        </UiButton>
        <UiButton class="w-full ml-2" type="button" color="secondary">
          <img class="w-4 mr-2" src="@/assets/images/compagnies/google.png" />
          Google
        </UiButton>
      </div>

      <!-- Go to register -->
      <p class="text-center my-[32px] text-gray-400">Pas encore de compte ? <router-link class="text-blue-400" to="/auth/register">Créé le</router-link></p>
    </Form>
  </div>
</template>
<script lang="ts" setup>
// Components
import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiSpacer from '@/components/ui/UiSpacer.vue'
import { Form } from 'vee-validate'

// Lib
import { ref } from 'vue'
import { signinEmail } from '@/helpers/auth.ts'

// Data
const email = ref<string>('')
const password = ref<string>('')

// Methods
const submit = (value: any) => {
  console.log(value)
  //signinEmail(email.value, password.value)
}
</script>
