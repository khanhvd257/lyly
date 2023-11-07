import request, { Method } from "@/api/axios"
export function getProvince (){
  return request({
    url: '/provices',
    headers: { 'Content-Type': 'application/json'},
    method: Method.GET,
  });
}

export function getDistrict (params){
  return request({
    url: '/districts',
    headers: { 'Content-Type': 'application/json'},
    method: Method.GET,
    params: params
  });
}

export function getWards (params){
  return request({
    url: '/wards',
    headers: { 'Content-Type': 'application/json'},
    method: Method.GET,
    params: params
  });
}
