import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'

const ENV = process.env.NODE_ENV
const BASE_API = process.env.BASE_API         //  连接测试服务器 请求跨域数据

// 创建axios实例
const service = axios.create({
  baseURL: BASE_API, // api的base_url
  timeout: 10000     // 请求超时时间 10s
})

// request 请求发送之前 拦截器
service.interceptors.request.use(config => {
  const Authorization = localStorage.getItem('Authorization')
  if (Authorization) {
    config.headers.Authorization = Authorization  // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    if (response) {
      switch (response.data.code) {
        case 'H0000':
          break
        case 'B1000':                                   // 返回 B1000 清除token信息并跳转到登录页面
          sessionStorage.setItem('session_key', null)  // 将token清空
          store.dispatch('LogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
          break
        default:
          Message.error(response.data.data.msg ? response.data.data.msg : '返回状态非H0000')
      }
      return response.data
    } else {
      Message.error('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
      }
    }
    Message.error(ENV === 'development' ? '服务器端产生错误！' : '网络因素，请稍后重试！')
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  })

export { BASE_API }
export default service

