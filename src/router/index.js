import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// 开发环境用同步加载，而正式环境用异步加载路由，提高开发环境的渲染效率

/**
 * icon : the icon class show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/

import Home from '@/views/home'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
    hidden: true,
    name: '主页',
    children: [{ path: 'home', component: _import('dashboard/index') }]
  },
  {
    path: '/login',
    component: _import('login/login'),
    name: '登录页',
    hidden: true
  },
  {
    path: '/module1',
    component: Home,
    redirect: '/module1/index',
    name: '模块1',
    icon: 'icon-yingxionglianmeng',
    children: [
      { path: 'index', name: '模块1-1', component: _import('module1') }
    ]
  },
  {
    path: '/module2',
    component: Home,
    redirect: '/module1/page1',
    name: '模块2',
    icon: 'icon-yingxionglianmeng',
    children: [
      { path: 'page1', name: '模块2-1', component: _import('module2/page1') },
      { path: 'page2', name: '模块2-2', component: _import('module2/page2') }
    ]
  },
  {
    path: '/error',
    component: Home,
    redirect: 'noredirect',
    name: '错误页面',
    icon: 'icon-shoucang',
    children: [
      { path: '/404', name: '404', component: _import('errorPage/404') }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),  // 滚动到指定位置
  routes: constantRouterMap
})
