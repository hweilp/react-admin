import * as Types from '../types'
import { Storage } from '../../utils'

let initState = {
  login: false,
  userInfo: Storage.get('USERINFO') || {}
};

const LoginReducer = (state = initState, data) => {
  switch (data.type) {
    case Types.USER_LOGIN :
      state.login = true
      state.userInfo = data.val
      Storage.set('USERINFO', state.userInfo)
      return {...state}
    case Types.USER_LOGINOUT :
      state.userInfo = {}
      state.login = false
      console.log('loginout')
      Storage.remove('USERINFO')
      return {...state}
    default :
      return state
  }
};

export default LoginReducer