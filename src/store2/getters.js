const getters = {
  accountName: state => state.userMsg ? state.userMsg.userInfo.accountname : '--',    // 账号名
  userName: state => state.userMsg ? state.userMsg.userInfo.username : '--',          // 用姓名
  jobName: state => state.userMsg ? state.userMsg.userInfo.jobName : '--',            // 岗位名
  orgName: state => state.userMsg ? state.userMsg.userInfo.jobName : '--',            // 所属部门
  userId: state => state.userMsg ? state.userMsg.userInfo.userid : null,              // 用户id
  menuList: state => state.userMsg ? state.userMsg.menuList : []                      // 权限数组
}
export default getters
