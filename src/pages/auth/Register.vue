<template>
  <div class="layout">
    <div class="mb-8">
      <h1 class="text-blue-500 text-3xl font-bold">Créer un compte <span>🔥</span></h1>
      <p class="text-sm mt-4 text-gray-400">Nous somme content de vous voir. <br />Pour utiliser l'application veuillez vous connecter.</p>
    </div>

    <div>
      <!-- Login -->
      <Form v-slot="{ errors }" @submit="signupEmail" :validation-schema="schema" class="h-[100%] flex flex-col justify-between">
        <div>
          <UiInput label="Email" type="email" name="email" :error="errors.email" placeholder="jean.dupont@mail.com" />
          <UiInput label="Mot de passe" type="password" name="password" :error="errors.password" placeholder="***********" />
          <UiInput label="Confirmation du mot de passe" type="password" name="password_confirmation" :error="errors.password_confirmation" placeholder="***********" />
        </div>
        <div>
          <!-- Button -->
          <UiButton class="w-full mt-[34px]" type="submit" color="primary">Créé mon compte</UiButton>
          <!-- Other login -->
          <UiSpacer>Autre moyen de connexion</UiSpacer>
          <div class="flex flex-col">
            <UiButton class="w-full mb-4" type="button" color="secondary">
              <img class="h-4 mr-2 -mt-1" src="@/assets/images/compagnies/apple.svg" />
              Continuer avec Apple
            </UiButton>
            <UiButton class="w-full" type="button" color="secondary">
              <img class="h-4 mr-2" src="@/assets/images/compagnies/google.png" />
              Continuer avec Google
            </UiButton>
          </div>

          <!-- Go to register -->
          <p class="text-center my-[32px] text-gray-400">
            Déjà un compte ?
            <span class="text-blue-400" @click="animation('login', 'slide-right')">Connectez vous</span>
          </p>
        </div>
      </Form>
    </div>
  </div>
</template>
<script lang="ts" setup>
// Imports
import { Form } from 'vee-validate'
import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiSpacer from '@/components/ui/UiSpacer.vue'
import { animation } from '@/helpers/animation'
import { signupEmail } from '@/helpers/auth'
import * as yup from 'yup'

// Data
const schema = yup.object({
  email: yup.string().required("L'email est requis"),
  password: yup.string().required('Le mot de passe est requis'),
  password_confirmation: yup.string().required('La confirmation est requise'),
})
</script>
