/*
* 定义一些过滤器
*/

// 弱化电话号码
export const vaguePhone = value => {
  const isPhone = /^1[0-9]{10}$/
  if (isPhone.test(value)) {
    return String(value).replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
  } else {
    return value
  }
}

// 客户根据状态过滤 followStatus
export const followStatusFilter = status => {
  const statusMap = {
    0: 'danger',
    1: 'success',
    2: 'gray',
    3: 'pink',
    4: 'warning',
    9: 'primary'
  }
  return statusMap[status]
}

// 去除所有的html标签
export const htmlFilter = html => html.replace(/<[^>]*>/g, '')

// 截取日期 字段 返回 月份日期
export const MonthDayFilter = date => {
  if (date) {
    return date.slice(5, 10)
  }
}
