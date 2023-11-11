import request, { Method } from "@/api/axios"

export function createReview(data) {
  return request({
    url: '/rating',
    headers: { 'Content-Type': 'application/json' },
    method: Method.POST,
    needToken: true,
    data: data,
  })
}

export function getReviewProduct(params) {
  return request({
    url: '/rating-product',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    params: params,
  })
}
