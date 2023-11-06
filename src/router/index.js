import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth } from "@/plugins/auth"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/page' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'page',
          component: () => import('../pages/home.vue'),
        },
      ],
    },
    {
      path: '/home',
      component: () => import('../layouts/profile.vue'),
      children: [
        {
          path: 'order',
          name: 'order',
          component: () => import('../pages/order.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../pages/cart.vue'),
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('../pages/account-settings.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue'),
    },
    {
      path: '/register',
      component: () => import('../pages/register.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/[...all].vue'),
    },
  ],
})

export default router
