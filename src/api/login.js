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

