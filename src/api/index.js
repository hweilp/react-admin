import { instance } from './apiConfig'

export const Register = params => { return instance.post(`/api/register`, params)}
export const Login = params => { return instance.post(`/api/login`, params)}
export const Loginout = params => { return instance.get(`/api/loginOut`, params)}
export const UserList = params => { return instance.get(`/api/user/list`, params)}
