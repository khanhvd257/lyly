import request, { Method } from "@/api/axios"

export function updateUser(data) {
  return request({
    url: '/customer',
    headers: { 'Content-Type': 'application/json' },
    method: Method.PUT,
    needToken: true,
    data: data,
  })

}

export function register(data) {
  return request({
    url: '/register',
    headers: { 'Content-Type': 'application/json' },
    method: Method.POST,
    needToken: true,
    data: data,
  })

}

export function logout() {
  return request({
    url: '/logout',
    headers: { 'Content-Type': 'application/json' },
    method: Method.POST,
    needToken: true,
  })

}
