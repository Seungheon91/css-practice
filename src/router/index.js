import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Layout2.vue")
  },
  {
    path: '/flex',
    name: 'flex',
    component: () => import("@/views/FlexView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router