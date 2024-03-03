import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: 'count', name: 'count', component: () => import('../views/home/count.vue') },
        { path: 'store', name: 'store', component: () => import('../views/home/store.vue') },
        { path: 'pathParams/:id', name: 'pathParams', component: () => import('../views/home/pathParams.vue') },
        { path: 'searchParams', name: 'searchParams', component: () => import('../views/home/searchParams.vue') },
        { path: 'form', name: 'form', component: () => import('../views/home/form.vue') },
      ]
    },
    {
      path: '/other',
      name: 'other',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/other/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
