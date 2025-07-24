// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Top from '../components/Top.vue'
import Department from '../components/Department.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Top,
  },
  {
    path: '/department',
    name: 'department',
    component: Department,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // ハッシュリンクの場合
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // 戻る・進むの場合
    if (savedPosition) {
      return savedPosition
    }

    // 通常のページ遷移
    return { top: 0 }
  }
})

export default router
