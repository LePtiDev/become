import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/scss/init.scss'

// Global components
import UiButton from './components/ui/UiButton.vue'
import UiInput from './components/ui/UiInput.vue'

// Store
const pinia = createPinia()

createApp(App).use(pinia).use(router).component('UiButton', UiButton).component('UiInput', UiInput).mount('#app')
