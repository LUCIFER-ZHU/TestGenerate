import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/apps/:app?",
    meta: {  
      captionTag: "",
      caption: "首页",
      viewType: "APPINDEXVIEW",
      imgPath: "",
      iconCls: "ribbon",
      requireAuth: false,
    },
    component: () => import("@page/default/app-index-view"),
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