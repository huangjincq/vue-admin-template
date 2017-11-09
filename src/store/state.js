/**
 * Created by huangjin on 2017/11/03.
 */
import { getLocalStorage } from '@/utils/storage'
import { constantRouterMap } from '@/router'
export default {
  userMsg: null,       // 用户信息
  routers: constantRouterMap,
  sidebarStatus: getLocalStorage('sidebarStatus') !== null ? getLocalStorage('sidebarStatus') : false,
  themeId: getLocalStorage('themeId') !== null ? getLocalStorage('themeId') : 1,
  visitedViews: []     // 访问过的页面
}
