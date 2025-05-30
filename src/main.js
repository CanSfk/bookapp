import { createApp } from 'vue'

import App from './App.vue'

// Css
import './assets/css/app.css'

// Router
import router from './router'

// Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
