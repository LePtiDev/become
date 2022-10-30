<template>
  <div class="layout">
    <div>
      <h1 class="text-blue-500 text-3xl font-bold">Créer un compte <span>🔥</span></h1>
      <p class="text-sm mt-4 text-gray-400">Nous somme content de vous voir. <br />Pour utiliser l'application veuillez vous connecter.</p>
    </div>

    <div>
      <Form @submit="submit">
        <FormInformations />

        <!-- Button -->
        <UiButton class="w-full mt-[34px]" type="button" color="primary">Créé mon compte</UiButton>
      </Form>

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
      <p class="text-center my-[32px] text-gray-400">
        Déjà un compte ?
        <span class="text-blue-400" @click="animation('login', 'slide-right')">Connectez vous</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
// Components
import { Form } from 'vee-validate'
import FormInformations from '@/components/auth/FormInformations.vue'
import UiButton from '@/components/ui/UiButton.vue'
import UiSpacer from '@/components/ui/UiSpacer.vue'
import { animation } from '@/helpers/animation.ts'

// Lib
import { signinEmail, signinGoogle } from '@/helpers/auth.ts'

// Data

// Methods
const submit = () => {}
</script>
