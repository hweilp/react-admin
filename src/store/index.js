import {createStore} from 'redux';
import RootReducer from './reducer';

// 根据 reducer 初始化 store

export default () => createStore(RootReducer);
