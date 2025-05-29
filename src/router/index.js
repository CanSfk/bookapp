import { createRouter, createWebHistory } from 'vue-router'
import TempView from '../views/TempView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'temp',
      component: TempView,
    },
  ],
})

export default router
