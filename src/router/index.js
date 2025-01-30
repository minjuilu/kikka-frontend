import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUp from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import PsdReset from '@/views/PsdReset.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/psd-reset',
      name: 'psd-reset',
      component: PsdReset,
    },
  ],
})

export default router
