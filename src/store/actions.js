/**
 * Created by huangjin on 2017/8/03.
 */
import { login, getUserInfo } from '@/api/login'
import { setLocalStorage } from '@/utils/storage'

import * as types from './mutation_types'

export default {
  // 登录
  Login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        if (response.code === 'H0000') {
          setLocalStorage('Authorization', response.data.token)   // 用户token 存到本地
          commit(types.SET_AUTHORIZATION, response.data.token)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  GetInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        if (response.code === 'H0000' && response.data) {
          commit(types.SET_USERMSG, response.data)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 登出
  LogOut ({ commit }) {
    return new Promise(resolve => {
      commit(types.SET_AUTHORIZATION, '')
      commit(types.SET_USERMSG, null)
      localStorage.removeItem('Authorization')
      resolve()
    })
  },
  // 设置侧边栏是否展开
  ToggleSideBar ({ commit }) {
    commit(types.SET_SIDEBARSTATUS)
  },
  // 增加一个访问记录
  AddVisitedViews ({ commit }, view) {
    commit(types.ADD_VISITED_VIEWS, view)
  },
  // 删除一个访问记录
  DelVisitedViews ({ commit, state }, view) {
    return new Promise((resolve) => {
      commit(types.DEL_VISITED_VIEWS, view)
      resolve([...state.visitedViews])
    })
  }
}
