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

export function getAllOrder(params) {
  return request({
    url: '/order',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    needToken: true,
    params: params
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
export function doneOrder(id) {
  return request({
    url: `/order/${id}/done`,
    headers: { 'Content-Type': 'application/json' },
    method: Method.PUT,
    needToken: true,
  })
}
