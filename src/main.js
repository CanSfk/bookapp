import { createApp } from 'vue'

import App from './App.vue'

// Css
import './assets/css/app.css'

// Router
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
