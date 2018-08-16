import * as Types from '../types'

let initState = {
  login : false,
  userInfo: {}
};

const LoginReducer = (state = initState, data) => {
  switch (data.type) {
    case Types.USER_LOGIN :
      state.userInfo = data.val
      state.login = true
      return {...state}
    case Types.USER_LOGINOUT :
      state.userInfo = {}
      state.login = false
      return {...state}
    default :
      return state
  }
};

export default LoginReducer