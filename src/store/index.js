import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import RootReducer from './reducer';

// 根据 reducer 初始化 store

export default () => createStore(RootReducer, applyMiddleware(thunk));
