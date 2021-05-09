import http from "./axiosInstance";

export function login(data) {
  return http({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return http({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return http({
    url: '/user/logout',
    method: 'post'
  })
}
