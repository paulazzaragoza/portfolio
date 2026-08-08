import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'reset, primevue, app',
      },
    },
  },
})

app.mount('#app')
