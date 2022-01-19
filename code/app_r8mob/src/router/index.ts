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
    component: () => import("@views/ungroup/app-index-view"),
    children: [
            // 临时提交首页视图路由 begin
            {
              path: "examples/:example?/views/viewtypeindexview",
              meta: {
                  tag:'ViewTypeIndexView'
              },
              component: () => import("@views/sample/view-type-index-view"),
            },
            {
              path: "examples/:example?/views/ctrltypeindexview",
              meta: {
                  tag:'CtrlTypeIndexView'
              },
              component: () => import("@views/sample/ctrl-type-index-view"),
            },
            // 临时提交首页视图路由 end
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