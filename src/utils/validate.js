/**
 * Created by huangjin on 17/11/08.
 */
// 验证电话号码  手机 电话
export function checkeIsPhone (str) {
  const isPhone = /(^([+]?86)?(1[34578]\d{9})$)|(^((0\d{2,3})-)?(\d{7,8})(-(\d{1,4}))?$)/  // 座机电话验证
  return (isPhone.test(str))
}

