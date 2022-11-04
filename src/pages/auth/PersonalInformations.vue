<template>
  <div class="layout">
    <div class="mb-8">
      <h1 class="text-blue-500 text-3xl font-bold">Qui est tu ? <span>🧐</span></h1>
      <p class="text-sm mt-4 text-gray-400">Nous avons besoin de plus d'information. <br />Elle ne seront utiliser que pour l'application.</p>
    </div>

    <Form v-slot="{ errors }" @submit="submit" :validation-schema="schema" class="h-[100%] flex flex-col justify-between">
      <!-- Inputs -->
      <div>
        <UiInput label="Prénom" type="text" name="firstname" :error="errors.firstname" placeholder="Jean" />
        <UiInput class="mt-[24px]" label="Nom" type="text" name="lastname" :error="errors.lastname" placeholder="Dupont" />
        <UiInput class="mt-[24px]" label="Téléphone" type="phone" name="phone" :error="errors.phone" placeholder="0606060606" />
        <UiInput class="mt-[24px]" label="Code postal" type="nphone" name="zip_code" :error="errors.zip_code" placeholder="75000" />
      </div>

      <!-- Buttons -->
      <UiButton class="w-full mt-[34px]" type="submit" color="primary">Suivant</UiButton>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { updatePersonalInformations } from '@/helpers/user.ts'
import { Form } from 'vee-validate'
import * as yup from 'yup'
import { animation } from '../../helpers/animation'

// Data
const schema = yup.object({
  firstname: yup.string().required('Le prénom est requis'),
  lastname: yup.string().required('Le nom est requis'),
  phone: yup.number().required('Le numéro de téléphone est requis'),
  zip_code: yup.number().required('Le code postal est requis'),
})

const submit = async (values: any) => {
  try {
    await updatePersonalInformations(values)
    animation('school-informations', 'slide-left')
  } catch (e) {
    console.log(e)
  }
}
</script>
