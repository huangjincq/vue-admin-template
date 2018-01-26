// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import SvgIcon from './components/SvgIcon' // svg组件

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './permission'   // 权限、路由拦截

Vue.use(ElementUI)
Vue.component('svg-icon', SvgIcon) // register globally

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
