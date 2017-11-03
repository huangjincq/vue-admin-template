import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login,
      name: '登录页'
    },
    {
      path: '/home',
      name: '主页',
      component: Home
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/errorPage/404')
    },
    { path: '*', redirect: '/404' }
  ]
})
