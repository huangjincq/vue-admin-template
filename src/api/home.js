import fetch from '@/utils/fetch'

/* *********** user **************************/
// 增
export function saveUserInfo (data) {
  return fetch({
    url: '/crm/archives/saveUserInfo',
    method: 'post',
    data
  })
}
