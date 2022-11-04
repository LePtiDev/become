<template>
  <div class="layout">
    <div class="mb-8">
      <h1 class="text-blue-500 text-3xl font-bold">Content de te revoir <span>👋</span></h1>
      <p class="text-sm mt-4 text-gray-400">Nous somme content de te revoir. <br />Pour utiliser l'application veuillez vous connecter.</p>
    </div>

    <Form v-slot="{ errors }" @submit="signinEmail" :validation-schema="schema" class="h-[100%] flex flex-col justify-between">
      <div>
        <!-- Inputs -->
        <UiInput label="Email" type="email" name="email" :error="errors.email" placeholder="Jean.dupont@mail.com" />
        <UiInput class="mt-[24px]" label="Mot de passe" type="password" name="password" :error="errors.password" placeholder="***********" />

        <!-- Forgot -->
        <div class="w-full flex justify-end text-sm text-gray-400">
          <router-link class="underline" to="/auth/forgot">Mot de passe oublié</router-link>
        </div>
      </div>

      <div>
        <!-- Buttons -->
        <UiButton class="w-full mt-[34px]" type="submit" color="primary">Me connecter</UiButton>

        <!-- Other login -->
        <UiSpacer>Autre moyen de connexion</UiSpacer>
        <div class="flex flex-col">
          <UiButton class="w-full mb-4" type="button" color="secondary">
            <img class="h-4 mr-2 -mt-1" src="@/assets/images/compagnies/apple.svg" />
            Continuer avec Apple
          </UiButton>
          <UiButton class="w-full" type="button" color="secondary" @click="signinGoogle()">
            <img class="h-4 mr-2" src="@/assets/images/compagnies/google.png" />
            Continuer avec Google
          </UiButton>
        </div>

        <!-- Go to register -->
        <p class="text-center my-[32px] text-gray-400">Pas encore de compte ? <span class="text-blue-400" @click="animation('register', 'slide-left')">Créé le</span></p>
      </div>
    </Form>
  </div>
</template>
<script lang="ts" setup>
// Imports
import { signinEmail, signinGoogle } from '@/helpers/auth'
import { animation } from '@/helpers/animation'
import * as yup from 'yup'
import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiSpacer from '@/components/ui/UiSpacer.vue'
import { Form } from 'vee-validate'

// Data
const schema = yup.object({
  email: yup.string().required("L'email est requis"),
  password: yup.string().required('Le mot de passe est requis'),
})
</script>
