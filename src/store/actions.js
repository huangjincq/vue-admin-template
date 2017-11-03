/**
 * Created by huangjin on 2017/8/03.
 */
import { login, getUserInfo } from '@/api/login'
import * as types from './mutation_types'

export default {
  // 登录
  Login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        if (response.code === 'H0000') {
          localStorage.setItem('Authorization', response.data.token)   // 用户token 存到本地
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
  }
}
