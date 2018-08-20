import * as Types from '../types'

let initState = {
  list: []
};

const LoginReducer = (state = initState, data) => {
  switch (data.type) {
    case Types.USER_LIST :
      state.list = data.val
      return {...state}
    default :
      return state
  }
};

export default LoginReducer