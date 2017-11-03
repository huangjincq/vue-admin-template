import fetch from '@/utils/fetch'

// 登录
export function login (data) {
  return fetch({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfo () {
  return fetch({
    url: '/getUserInfo',
    method: 'get'
  })
}

// 获取用户信息
export function getSearchUtil () {
  return fetch({
    url: '/crm/comm/search/getSearchUtil',
    method: 'get',
    params: { busiType: 10 }
  })
}

// 获取短信验证码
export function getShortMessage (phone) {
  return fetch({
    url: '/sram/archives/getCheckCode',
    method: 'get',
    params: { phone }
  })
}

// 重置密码
export function resetPass (form) {
  return fetch({
    url: '/sram/archives/resetPass',
    method: 'get',
    params: form
  })
}

// 修改密码
export function modifyPassword (form) {
  return fetch({
    url: '/index/baseinfo/user/modifyPassword',
    method: 'get',
    params: form
  })
}

