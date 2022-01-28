import { createRouter, createWebHashHistory } from 'vue-router';
import { IParam } from '@core';

const routes = [
  {
    path: "/apps/:app?",
    beforeEnter: async (to: any, from: any) => {
      const appParams:IParam = {};
      const auth: Promise<any> = await App.initApp(appParams);
      return auth;
    },
    meta: {  
      tag: 'AppIndexView'
    },
    component: () => import("@views/ungroup/app-index-view"),
    children: [
                {
                  path: "views/quickmenuappportalview",
                  meta: {
                      tag:'QuickMenuAppPortalView'
                  },
                  component: () => import("@views/ungroup/quick-menu-app-portal-view"),
                },
                {
                  path: "views/appportalview",
                  meta: {
                      tag:'AppPortalView'
                  },
                  component: () => import("@views/ungroup/app-portal-view"),
                },
    ]
  },
  {
    path: "/",
    redirect: "/apps/r8mob"
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@components/common/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@components/common/login.vue")
  },
  {
    path: '/lock',
    name: 'lock',
    component: () => import('@components/common/lock.vue'),
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