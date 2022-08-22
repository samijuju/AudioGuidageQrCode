// gère les routes(pages)
import {createRouter, createWebHistory} from 'vue-router'
import Accueil from '@/views/Accueil.vue'
const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    alias: '/index.html'
  },
  {
    path: '/PageTest',
    name: 'PageTest',
    component: () => import(/* webpackChunkName: "PageTest" */ '../views/PageTest.vue')
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: () => import(/* webpackChunkName: "Page1" */ '../views/Page1.vue')
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import(/* webpackChunkName: "Page2" */ '../views/Page2.vue')
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: () => import(/* webpackChunkName: "Page3" */ '../views/Page3.vue')
  },
  {
    path: '/Page4',
    name: 'Page4',
    component: () => import(/* webpackChunkName: "Page4" */ '../views/Page4.vue')
  },
  {
    path: '/Page5',
    name: 'Page5',
    component: () => import(/* webpackChunkName: "Artist" */ '../views/Page5.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
