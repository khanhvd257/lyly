import request, { Method } from "@/api/axios"

export function getCategory(data) {
  return request({
    url: '/category',
    headers: { 'Content-Type': 'application/json' },
    method: Method.GET,
  })
}
