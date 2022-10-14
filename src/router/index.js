import {createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      index: 1,
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/Category.vue'),
    meta: {
      index: 1,
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue'),
    meta: {
      index: 1,
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
