/*
* 存储api
*/
/*
* localStorage  Api
*/
export function setLocalStorage (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage (value) {
  return JSON.parse(window.localStorage.getItem(value))
}

export function removeLocalStorage (key) {
  window.localStorage.removeItem(key)
}

/*
* SessionStorage  Api
*/
export function setSessionStorage (key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function getSessionStorage (value) {
  return JSON.parse(window.sessionStorage.getItem(value))
}

export function removeSessionStorage (key) {
  window.sessionStorage.removeItem(key)
}
