/**
 * Created by huangjin on 2017/8/03.
 */
import * as types from './mutation_types'
import { setLocalStorage } from '@/utils/storage'

export default {
  // 设置token
  [types.SET_AUTHORIZATION] (state, authorization) {
    state.authorization = authorization
  },
  // 设置用户信息
  [types.SET_USERMSG] (state, userMsg) {
    state.userMsg = userMsg
  },
  // 设置侧边栏是否展开
  [types.SET_SIDEBARSTATUS] (state) {
    if (state.sidebarStatus) {
      setLocalStorage('sidebarStatus', false)
    } else {
      setLocalStorage('sidebarStatus', true)
    }
    state.sidebarStatus = !state.sidebarStatus
  },
  [types.ADD_VISITED_VIEWS] (state, view) {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push({ name: view.name, path: view.path })
  },
  [types.DEL_VISITED_VIEWS] (state, view) {
    let index
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        index = i
        break
      }
    }
    state.visitedViews.splice(index, 1)
  }
}
