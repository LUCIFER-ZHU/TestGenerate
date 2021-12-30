import { createRouter, createWebHashHistory } from 'vue-router';
import ExampleEditorEditView from '@page/example/example-editor-edit-view';
// import { JobsRegistryGridView } from '@page/jobs-registry/jobs-registry-grid-view';
const routes = [
  {
    path: '/ExampleEditorEditView',
    component: ExampleEditorEditView
  },
  // {
  //   path: '/JobsRegistryGridView',
  //   component: JobsRegistryGridView
  // },
  {
    path: '/',
    redirect: 'ExampleEditorEditView'
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