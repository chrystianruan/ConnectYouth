import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/eventRegister',
      name: 'eventRegister',
      component: () => import('../views/eventRegisterView.vue')
    }
  ]
})

export default router
