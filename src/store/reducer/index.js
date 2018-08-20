import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import HomeReducer from './HomeReducer'
import UserReducer from './UserReducer'

const RootReducer = combineReducers({
  HomeReducer,
  LoginReducer,
  UserReducer
});

export default RootReducer;