import { createRouter, createWebHashHistory } from 'vue-router';
import { IParam } from '@core';

const routes = [
  {
    path: "/apps/:app?",
    beforeEnter: async (to: any, from: any) => {
      const appParams:IParam = {};
      const auth: Promise<any> = await App.initAppAuth(appParams);
      return auth;
    },
    meta: {  
      tag: ''
    },
    component: () => import("@views//"),
    children: [
    ]
  },
  {
    path: "/",
    redirect: "/apps/j2eer8samples"
  },
  {
    path: '/404',
    component: () => import('@components/common/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@components/common/login.vue")
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/**
 * 全局路由守卫
 */
router.beforeEach((to, from, next) => {
  next();
})
export default router;