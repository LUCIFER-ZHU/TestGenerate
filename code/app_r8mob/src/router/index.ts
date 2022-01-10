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
      tag: 'AppIndexView'
    },
    component: () => import("@page/ungroup/app-index-view"),
    children: [
    ]
  },
  {
    path: "/",
    redirect: "/apps/r8mob"
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