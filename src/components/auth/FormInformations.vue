<template>
  <UiInput label="Email" type="email" name="email" placeholder="jean.dupont@mail.com" />
  <UiInput label="Mot de passe" type="password" name="password" placeholder="***********" />
  <UiInput label="Confirmation du mot de passe" type="password" name="password_confirmation" placeholder="***********" />
</template>
<script lang="ts" setup>
// Imports
import UiInput from '@/components/ui/UiInput.vue'
</script>
