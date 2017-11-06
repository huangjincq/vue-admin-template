/**
 * Created by huangjin on 2018/0/8.
 */
export default {
  permissionRouters: state => state.routers,                         // 路由数组
  sidebar: state => state.sidebarStatus,                              // 侧边栏展开状态
  avatar: state => state.userMsg.avatar ? state.userMsg.avatar : 'static/img/avatar.jpg',
  visitedViews: state => state.visitedViews
}

