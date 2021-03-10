import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/views/home/Home';
import AdminPages from '@/components/views/admin/AdminPages';
import ArticlesByCategory from '@/components/views/article/ArticlesByCategory';
import ArticleById from '@/components/views/article/ArticleById';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
  },
  {
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
  },
  {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
  }
]

export default new VueRouter({
  mode: 'history',
  routes
});