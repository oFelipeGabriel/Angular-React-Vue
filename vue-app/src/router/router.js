import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/hello', component: () => import('../components/HelloWorld') },
  { path: '/blog', component: ()=> import('../pages/BlogPage.vue')},
  { path: '/', component: () => import('../pages/NoticiasPage') },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router