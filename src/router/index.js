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
        {
          path: 'product',
          name: 'productDetail',
          meta: {
            title: 'Chi tiết sản phẩm',
          },
          component: () => import('../pages/product/productDetail.vue'),
        },
        {
          path: 'pay',
          name: 'pay',
          meta: {
            title: 'Chi tiết thanh toán',
          },
          component: () => import('../pages/order/preOrder.vue'),
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
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // Cuộn lên đầu trang
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'LYLY Store' // Tiêu đề mặc định nếu không có meta title
  }
  next()

})
export default router
