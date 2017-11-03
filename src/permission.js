import router from './router'
import store from './store'
import NProgress from 'nprogress'  // Progress 进度条
import 'nprogress/nprogress.css'   // Progress 进度条样式
import { Message } from 'element-ui'

const whiteList = ['/login']   // 不需要权限验证拦截的 路由列表
router.beforeEach((to, from, next) => {
  NProgress.start()            // 开启Progress
  if (localStorage.getItem('Authorization')) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (!store.state.userMsg) {
        store.dispatch('GetInfo', this.form).then(res => {
          this.loading = false
          if (res.code === 'H0000' && res.data) {
            next()
          } else {
            console.log('login error')
            Message.error('拉取用户信息失败')
          }
        }).catch(() => {
          this.loading = false
          Message.error('拉取用户信息失败')
          next()
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()  // 结束Progress
})
