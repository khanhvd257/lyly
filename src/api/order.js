import request, { Method } from "@/api/axios"

export function orderProduct(data) {
  return request({
    url: '/order',
    headers: { 'Content-Type': 'application/json' },
    method: Method.POST,
    needToken: true,
    data: data,
  })
}


export function getAllCart() {
  return request({
    url: '/cart',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    needToken: true,
  })
}

export function getAllOrder() {
  return request({
    url: '/order',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    needToken: true,
  })
}

export function addToCart(data) {
  return request({
    url: '/cart',
    headers: { 'Content-Type': 'application/json' },
    method: Method.POST,
    needToken: true,
    data: data,
  })
}

export function cancelOrder(id) {
  return request({
    url: `/order/${id}/cancel`,
    headers: { 'Content-Type': 'application/json' },
    method: Method.PUT,
    needToken: true,
  })
}
