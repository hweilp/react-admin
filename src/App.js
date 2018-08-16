import React, { Component } from 'react';
import {Provider} from 'react-redux'
import configureStore from './store'
import Router from './router'
import 'antd/dist/antd.less'
import './styles/com.less'

const Store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    );
  }

}


export default App;
