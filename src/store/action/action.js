import * as Types  from '../types';
// import { Login } from '../../api'

export const user_login = (val) => ({ type: Types.USER_LOGIN, val})
export const user_login_out = (val) => ({type: Types.USER_LOGINOUT,val})
