import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// 开发环境用同步加载，而正式环境用异步加载路由，提高开发环境的渲染效率

/**
 * icon : the icon class show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : {  }  will control the page message
 **/

import Home from '@/views/home'
import components from './components'
import charts from './charts'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: _import('login/login'),
    name: '登录页',
    hidden: true
  },
  {
    path: '/',
    redirect: '/home',
    component: Home,
    name: '首页',
    hidden: true,
    children: [{ path: 'home', component: _import('welcome/index'), name: '欢迎登录！' }]
  },
  {
    path: '/introduction',
    redirect: '/introduction/welcome',
    component: Home,
    noDropdown: true,
    icon: 'icon-zhuyetc',
    children: [{ path: 'index', name: '简介', component: _import('introduction/index') }]
  },
  {
    path: '/components',
    component: Home,
    redirect: '/components/index',
    name: '组件',
    icon: 'icon-zujian',
    children: [...components]
  },
  {
    path: '/charts',
    component: Home,
    redirect: '/charts/page1',
    name: '图表',
    icon: 'icon-chart',
    children: [...charts]
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
