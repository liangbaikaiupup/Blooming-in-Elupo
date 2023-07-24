/*
 * @Author: your name
 * @Date: 2022-03-19 13:58:13
 * @LastEditTime: 2022-05-16 17:13:45
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\router\index.ts
 */
// createWebHistory/createWebHashHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'home-filled', affix: true },
      },
    ],
  },

  {
    path: '/juejin',
    component: Layout,
    redirect: '/juejin/index',
    children: [
      {
        path: 'index',
        hidden: true,
        component: () => import('@/views/jue-jin/index.vue'),
        name: 'JueJin',
        meta: { title: '掘金', icon: 'Document' },
      },
    ],
  },

  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    name: 'GuideBook',
    meta: { title: 'GuideBook', icon: 'Promotion' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index.vue'),
        name: 'Guide',
        meta: { title: '指南', icon: 'Edit' },
      },
      {
        path: 'documentation',
        component: () => import('@/views/guide/documentation.vue'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'Fries' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
