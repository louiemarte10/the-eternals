import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 64 }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/docs',
      component: () => import('../views/DocsView.vue'),
    },
    {
      path: '/api-reference',
      component: () => import('../views/ApiReferenceView.vue'),
    },
  ],
})
