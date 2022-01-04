import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/apps/:app?",
    meta: {  
      captionTag: "",
      caption: "桌面端应用示例",
      viewType: "APPINDEXVIEW",
      requireAuth: false,
    },
    component: () => import("@page/default/sample"),
    children: [
    ]
  },
  {
    path: "/",
    redirect: "/apps/sample"
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