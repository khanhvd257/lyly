import request, { Method } from "@/api/axios"

export function getAllCategory(params) {
  return request({
    url: '/category',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    params: params,
  })
}

export function getAllProduct(params) {
  return request({
    url: '/products',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    params: params,
  })
}

export function getBestSell(params) {
  return request({
    url: '/best-sell',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    params: params,
  })
}

// favorite => theo lươt đánh giá
// bestSelling => theo lượt bán
//ko truyển gi la lay tat ca
export function getProducts(params) {
  return request({
    url: '/products',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    params: params,
  })
}

export function getTop5Product(params) {
  return request({
    url: '/recommend',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    params: params,
  })
}

export function getDetailProduct(id) {
  return request({
    url: `/product-detail/${id}`,
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
  })
}

export function createProduct(data) {
  return request({
    url: '/product',
    headers: { 'Content-Type': 'application/json' },
    method: Method.POST,
    needToken: true,
    data: data,
  })
}

export function getCategory() {
  return request({
    url: '/category',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
    needToken: true,
  })
}
