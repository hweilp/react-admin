import * as Types from '../types';

let initState = {
  text : '首页'
};

const HomeReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_HOME_LINE :
      console.log(action);
      return {...state,text : '首页出现' + action.val.info};
    default :
      return state;
  }
};
export default HomeReducer;