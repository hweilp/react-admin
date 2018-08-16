import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';

const RootReducer = combineReducers({
  HomeReducer,
  LoginReducer
});

export default RootReducer;