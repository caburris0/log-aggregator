import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aggregations from '../views/Aggregations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },  
    {
      path: '/aggregations',
      name: 'aggregations',
      component: Aggregations
    }    
  ]
})

export default router
