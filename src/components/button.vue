<template>
  <button :type="type" class="flex items-center justify-center" :class="getStyle()"><slot /></button>
</template>
<script lang="ts" setup>
// Props & emits
const props = defineProps<{
  type: 'submit' | 'button'
  color: 'primary' | 'secondary' | 'terciary'
}>()

// Methods
const getStyle = () => {
  if (props.color === 'primary') {
    return 'inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  } else if (props.color === 'secondary') {
    return 'inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  } else if (props.color === 'terciary') {
    return 'flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'
  }
}
</script>
