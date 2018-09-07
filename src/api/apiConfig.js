import Axios from 'axios'
// import { Storage } from '../utils'
import { message } from 'antd'
let qs = require('qs')

let Base = 'http://www.hw.com:8081'

//------------------------------ 正常请求 -------------------------------

const instanceRequest = Axios.create({
  baseURL: Base,
  headers: {
    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
  },
  timeout : 5000,
});

//------------------------------ http请求拦截器 -------------------------------
instanceRequest.interceptors.request.use(config => {
  // 配置headers token
  // if (Storage.get('USERINFO').session_id) {
    // config.headers = { 'SESSION_ID': Storage.get('USERINFO').session_id}
  // }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data) // qs格式化
  }
  return config
}, error => {
  return Promise.reject(error)
});


// http响应拦截器
instanceRequest.interceptors.response.use(data => {
  // 响应成功
  let responseData = {}; // 返回数据
  if (data.data.code.toString().indexOf('200') !== -1) {
    responseData = data.data
  } else {
    if (data.data.code === 4001) {
      // Storage.remove('USERINFO')
    }
    message.error(data.data.msg)
  }
  return responseData

}, error => {
  // 响应失败
  message.error('系统繁忙，请稍后再试！')
  return Promise.reject(error);
});


// 图片文件上传
const ImgUploadRequest = Axios.create({
  baseURL : Base,
  headers : {
    'Content-Type':'multipart/form-data',
  },
  withCredentials:true,
  timeout : 5000,
});

//------------------------------ host -------------------------------
export const BaseUrl = Base;
export const ImgUpload = ImgUploadRequest;
export const instance = instanceRequest;
