import { createRouter, createWebHistory } from 'vue-router'

// Views
import BooksView from '../views/BooksView/BooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'booksView',
      component: BooksView,
    },
    {
      path: '/about',
      name: 'aboutView',
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
