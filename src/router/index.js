import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeVi.vue'
import Dash from '../views/DashBoard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dash
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
